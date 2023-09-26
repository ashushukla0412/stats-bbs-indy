import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

offer_sent_time_start = 0
offer_sent_time_end = 0

request_sent_time_start =0
request_sent_time_end = 0

issue_credential_time_start = 0
issue_credential_time_end = 0

num_credentials = int(1)
curr_cred_index = int(0)

cred_state_done = True