import { clear } from 'console'
import { textSync } from 'figlet'
import { prompt } from 'inquirer'

import { BaseInquirer, ConfirmOptions } from './BaseInquirer'
import { Faber, RegistryOptions } from './Faber'
import { Listener } from './Listener'
import { Title } from './OutputClass'
import { curr_cred_state, num_creds } from './stats-time'
import { unlinkSync } from 'fs'

export const runFaber = async () => {
  clear()
  console.log(textSync('Faber', { horizontalLayout: 'full' }))
  const faber = await FaberInquirer.build()
  await faber.processAnswer()
}

enum PromptOptions {
  CreateConnection = 'Create connection invitation',
  OfferCredential = 'Offer credential',
  RequestProof = 'Request proof',
  SendMessage = 'Send message',
  Exit = 'Exit',
  Restart = 'Restart',
}

export class FaberInquirer extends BaseInquirer {
  public faber: Faber
  public promptOptionsString: string[]
  public listener: Listener

  public constructor(faber: Faber) {
    super()
    this.faber = faber
    this.listener = new Listener()
    this.promptOptionsString = Object.values(PromptOptions)
    this.listener.messageListener(this.faber.agent, this.faber.name)
  }

  public static async build(): Promise<FaberInquirer> {
    const faber = await Faber.build()
    return new FaberInquirer(faber)
  }

  private async getPromptChoice() {
    if (this.faber.outOfBandId) return prompt([this.inquireOptions(this.promptOptionsString)])

    const reducedOption = [PromptOptions.CreateConnection, PromptOptions.Exit, PromptOptions.Restart]
    return prompt([this.inquireOptions(reducedOption)])
  }

  public async processAnswer() {
    const choice = await this.getPromptChoice()
    if (this.listener.on) return
    try {
      unlinkSync('.stats/time_total.txt');
    } catch (error) {
      // nothing
    }
    await this.connection();
    await this.credential();
    console.log('---ALL DONE---');
    await this.exit();
  }

  public async connection() {
    await this.faber.setupConnection()
    this.listener.credentialDoneListener(this.faber, this)
    this.listener.faberCredentialListener(this.faber, this)
  }

  public async exitUseCase(title: string) {
    const confirm = await prompt([this.inquireConfirmation(title)])
    if (confirm.options === ConfirmOptions.No) {
      return false
    } else if (confirm.options === ConfirmOptions.Yes) {
      return true
    }
  }

  public async credential() {
    await this.faber.importDid(RegistryOptions.indy)
    for (let i = 0; i < num_creds;) {
      if (curr_cred_state.done) {
        curr_cred_state.done = false;
        console.log("credential");
        await this.faber.issueCredential(i)
        i++;
      } else {
        await new Promise(f => setTimeout(f, 10));
      }
    }
  }

  public async proof() {
    await this.faber.sendProofRequest()
    const title = 'Is the proof request accepted?'
    await this.listener.newAcceptedPrompt(title, this)
  }

  public async message() {
    const message = await this.inquireMessage()
    if (!message) return

    await this.faber.sendMessage(message)
  }

  public async exit() {
    const confirm = await prompt([this.inquireConfirmation(Title.ConfirmTitle)])
    if (confirm.options === ConfirmOptions.No) {
      return
    } else if (confirm.options === ConfirmOptions.Yes) {
      await this.faber.exit()
    }
  }

  public async restart() {
    const confirm = await prompt([this.inquireConfirmation(Title.ConfirmTitle)])
    if (confirm.options === ConfirmOptions.No) {
      await this.processAnswer()
      return
    } else if (confirm.options === ConfirmOptions.Yes) {
      await this.faber.restart()
      await runFaber()
    }
  }
}

void runFaber()
