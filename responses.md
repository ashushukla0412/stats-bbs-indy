Step 1
Faber- v2/send-offer
request
```
{
  "connection_id": "2b4407cc-3e96-4dea-8e69-80a890531d28",
  "filter": {
    "ld_proof": {
      "credential": {
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://www.w3.org/2018/credentials/examples/v1"
        ],
        "type": ["VerifiableCredential", "UniversityDegreeCredential"],
        "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
        "issuanceDate": "2020-01-01T12:00:00Z",
        "credentialSubject": {
          "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
          "givenName": "Sally26",
          "familyName": "Student",
          "degree": {
            "type": "BachelorDegree",
            "degreeType": "Undergraduate",
            "name": "Bachelor of Science and Arts"
          },
          "college": "Faber College"
        }
      },
      "options": {
        "proofType": "BbsBlsSignature2020"
      }
    }
  }
}

```
Response
```
{
  "state": "offer-sent",
  "created_at": "2023-09-22T09:58:17.477806Z",
  "updated_at": "2023-09-22T09:58:17.477806Z",
  "cred_ex_id": "e78af7e7-f3af-4fa1-8421-3bd18aee200d",
  "connection_id": "2b4407cc-3e96-4dea-8e69-80a890531d28",
  "thread_id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
  "initiator": "self",
  "role": "issuer",
  "cred_proposal": {
    "@type": "https://didcomm.org/issue-credential/2.0/propose-credential",
    "@id": "e038073b-4d8c-470e-a068-d591f61b5204",
    "formats": [
      {
        "attach_id": "ld_proof",
        "format": "aries/ld-proof-vc-detail@v1.0"
      }
    ],
    "filters~attach": [
      {
        "@id": "ld_proof",
        "mime-type": "application/json",
        "data": {
          "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
        }
      }
    ]
  },
  "cred_offer": {
    "@type": "https://didcomm.org/issue-credential/2.0/offer-credential",
    "@id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
    "~thread": {},
    "formats": [
      {
        "attach_id": "ld_proof",
        "format": "aries/ld-proof-vc-detail@v1.0"
      }
    ],
    "offers~attach": [
      {
        "@id": "ld_proof",
        "mime-type": "application/json",
        "data": {
          "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
        }
      }
    ]
  },
  "by_format": {
    "cred_proposal": {
      "ld_proof": {
        "credential": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
          ],
          "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
          ],
          "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
          "issuanceDate": "2020-01-01T12:00:00Z",
          "credentialSubject": {
            "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
            "givenName": "Sally26",
            "familyName": "Student",
            "degree": {
              "type": "BachelorDegree",
              "degreeType": "Undergraduate",
              "name": "Bachelor of Science and Arts"
            },
            "college": "Faber College"
          }
        },
        "options": {
          "proofType": "BbsBlsSignature2020"
        }
      }
    },
    "cred_offer": {
      "ld_proof": {
        "credential": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1",
            "https://w3id.org/security/bbs/v1"
          ],
          "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
          ],
          "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
          "issuanceDate": "2020-01-01T12:00:00Z",
          "credentialSubject": {
            "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
            "givenName": "Sally26",
            "familyName": "Student",
            "degree": {
              "type": "BachelorDegree",
              "degreeType": "Undergraduate",
              "name": "Bachelor of Science and Arts"
            },
            "college": "Faber College"
          }
        },
        "options": {
          "proofType": "BbsBlsSignature2020"
        }
      }
    }
  },
  "auto_offer": false
}
```

Step 2
Alice 
Request v2/records/{cred-ex-id}/send-request
with cred-ex-id : e509c0bd-10e0-4a35-9436-305982535deb
```
{
  "auto_remove": true,
  "holder_did": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH"
}
```
Response
```
{
  "state": "request-sent",
  "created_at": "2023-09-22T09:58:17.517767Z",
  "updated_at": "2023-09-22T10:02:02.387993Z",
  "trace": false,
  "cred_ex_id": "e509c0bd-10e0-4a35-9436-305982535deb",
  "connection_id": "f50e4f82-c4c6-4305-9127-4554e20f839d",
  "thread_id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
  "initiator": "external",
  "role": "holder",
  "cred_offer": {
    "@type": "https://didcomm.org/issue-credential/2.0/offer-credential",
    "@id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
    "~thread": {},
    "formats": [
      {
        "attach_id": "ld_proof",
        "format": "aries/ld-proof-vc-detail@v1.0"
      }
    ],
    "offers~attach": [
      {
        "@id": "ld_proof",
        "mime-type": "application/json",
        "data": {
          "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
        }
      }
    ]
  },
  "cred_request": {
    "@type": "https://didcomm.org/issue-credential/2.0/request-credential",
    "@id": "2c5dca35-cf95-4cb6-9d78-8e0756c0bfdf",
    "~thread": {
      "thid": "9dece615-6e34-4126-8f9d-e0422ce43c58"
    },
    "formats": [
      {
        "attach_id": "ld_proof",
        "format": "aries/ld-proof-vc-detail@v1.0"
      }
    ],
    "requests~attach": [
      {
        "@id": "ld_proof",
        "mime-type": "application/json",
        "data": {
          "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
        }
      }
    ]
  },
  "by_format": {
    "cred_offer": {
      "ld_proof": {
        "credential": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1",
            "https://w3id.org/security/bbs/v1"
          ],
          "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
          ],
          "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
          "issuanceDate": "2020-01-01T12:00:00Z",
          "credentialSubject": {
            "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
            "givenName": "Sally26",
            "familyName": "Student",
            "degree": {
              "type": "BachelorDegree",
              "degreeType": "Undergraduate",
              "name": "Bachelor of Science and Arts"
            },
            "college": "Faber College"
          }
        },
        "options": {
          "proofType": "BbsBlsSignature2020"
        }
      }
    },
    "cred_request": {
      "ld_proof": {
        "credential": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1",
            "https://w3id.org/security/bbs/v1"
          ],
          "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
          ],
          "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
          "issuanceDate": "2020-01-01T12:00:00Z",
          "credentialSubject": {
            "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
            "givenName": "Sally26",
            "familyName": "Student",
            "degree": {
              "type": "BachelorDegree",
              "degreeType": "Undergraduate",
              "name": "Bachelor of Science and Arts"
            },
            "college": "Faber College"
          }
        },
        "options": {
          "proofType": "BbsBlsSignature2020"
        }
      }
    }
  },
  "auto_offer": false,
  "auto_issue": false,
  "auto_remove": true
}
```

Step 3
Faber
Request v2/{cred-ex-id}/issue
with cred-ex-id: e78af7e7-f3af-4fa1-8421-3bd18aee200d
```
{}
```
Response
```
{
  "cred_ex_record": {
    "state": "credential-issued",
    "created_at": "2023-09-22T09:58:17.477806Z",
    "updated_at": "2023-09-22T10:04:01.864099Z",
    "cred_ex_id": "e78af7e7-f3af-4fa1-8421-3bd18aee200d",
    "connection_id": "2b4407cc-3e96-4dea-8e69-80a890531d28",
    "thread_id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
    "initiator": "self",
    "role": "issuer",
    "cred_proposal": {
      "@type": "https://didcomm.org/issue-credential/2.0/propose-credential",
      "@id": "e038073b-4d8c-470e-a068-d591f61b5204",
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc-detail@v1.0"
        }
      ],
      "filters~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
          }
        }
      ]
    },
    "cred_offer": {
      "@type": "https://didcomm.org/issue-credential/2.0/offer-credential",
      "@id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
      "~thread": {},
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc-detail@v1.0"
        }
      ],
      "offers~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
          }
        }
      ]
    },
    "cred_request": {
      "@type": "https://didcomm.org/issue-credential/2.0/request-credential",
      "@id": "2c5dca35-cf95-4cb6-9d78-8e0756c0bfdf",
      "~thread": {
        "thid": "9dece615-6e34-4126-8f9d-e0422ce43c58"
      },
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc-detail@v1.0"
        }
      ],
      "requests~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
          }
        }
      ]
    },
    "cred_issue": {
      "@type": "https://didcomm.org/issue-credential/2.0/issue-credential",
      "@id": "68ce910b-f3cc-4b93-b0ab-507de1ba261f",
      "~thread": {
        "thid": "9dece615-6e34-4126-8f9d-e0422ce43c58"
      },
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc@v1.0"
        }
      ],
      "credentials~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9LCAicHJvb2YiOiB7InR5cGUiOiAiQmJzQmxzU2lnbmF0dXJlMjAyMCIsICJ2ZXJpZmljYXRpb25NZXRob2QiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmojelVDN0R0a0ZmSlM3dWdtajdmZEF6R2lWbjREZ3Bxajd3V0J1NlJ4QmFDMVlGb1J0cXdtOGpEcVc4ZnZBVTRWeHN4UlJuSFpUMmdzSGE2SmZrd2RmczhFWldUdDF4dE00dTdOd3ZTMmRRWUVwTEdpeUE1d29HN1hEd1FlZEtZbktVdlVOeTJqIiwgImNyZWF0ZWQiOiAiMjAyMy0wOS0yMlQxMDowMzo1OC43MDcyNjkrMDA6MDAiLCAicHJvb2ZQdXJwb3NlIjogImFzc2VydGlvbk1ldGhvZCIsICJwcm9vZlZhbHVlIjogImx0YWwzTVd3M2xjeS93dExzZUJDV2F0QTJCbGZOTHdNZHd6aFhEdGRpejVXcVRhdVJKTkdrUzkxU0poVzBIL0dETy9aTVVsSkFZcmRKRmVXT0ozOWlkU04zK0FaVTFETFJ2cjV5am5MSlBzaWR1VEJmcW5uR3k5QVQ3aWx5VDdzY0lScWRGOGZmVzB1VWs5UDZsVFpvZz09In19"
          }
        }
      ]
    },
    "by_format": {
      "cred_proposal": {
        "ld_proof": {
          "credential": {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://www.w3.org/2018/credentials/examples/v1"
            ],
            "type": [
              "VerifiableCredential",
              "UniversityDegreeCredential"
            ],
            "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "issuanceDate": "2020-01-01T12:00:00Z",
            "credentialSubject": {
              "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
              "givenName": "Sally26",
              "familyName": "Student",
              "degree": {
                "type": "BachelorDegree",
                "degreeType": "Undergraduate",
                "name": "Bachelor of Science and Arts"
              },
              "college": "Faber College"
            }
          },
          "options": {
            "proofType": "BbsBlsSignature2020"
          }
        }
      },
      "cred_offer": {
        "ld_proof": {
          "credential": {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://www.w3.org/2018/credentials/examples/v1",
              "https://w3id.org/security/bbs/v1"
            ],
            "type": [
              "VerifiableCredential",
              "UniversityDegreeCredential"
            ],
            "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "issuanceDate": "2020-01-01T12:00:00Z",
            "credentialSubject": {
              "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
              "givenName": "Sally26",
              "familyName": "Student",
              "degree": {
                "type": "BachelorDegree",
                "degreeType": "Undergraduate",
                "name": "Bachelor of Science and Arts"
              },
              "college": "Faber College"
            }
          },
          "options": {
            "proofType": "BbsBlsSignature2020"
          }
        }
      },
      "cred_request": {
        "ld_proof": {
          "credential": {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://www.w3.org/2018/credentials/examples/v1",
              "https://w3id.org/security/bbs/v1"
            ],
            "type": [
              "VerifiableCredential",
              "UniversityDegreeCredential"
            ],
            "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "issuanceDate": "2020-01-01T12:00:00Z",
            "credentialSubject": {
              "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
              "givenName": "Sally26",
              "familyName": "Student",
              "degree": {
                "type": "BachelorDegree",
                "degreeType": "Undergraduate",
                "name": "Bachelor of Science and Arts"
              },
              "college": "Faber College"
            }
          },
          "options": {
            "proofType": "BbsBlsSignature2020"
          }
        }
      },
      "cred_issue": {
        "ld_proof": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1",
            "https://w3id.org/security/bbs/v1"
          ],
          "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
          ],
          "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
          "issuanceDate": "2020-01-01T12:00:00Z",
          "credentialSubject": {
            "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
            "givenName": "Sally26",
            "familyName": "Student",
            "degree": {
              "type": "BachelorDegree",
              "degreeType": "Undergraduate",
              "name": "Bachelor of Science and Arts"
            },
            "college": "Faber College"
          },
          "proof": {
            "type": "BbsBlsSignature2020",
            "verificationMethod": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j#zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "created": "2023-09-22T10:03:58.707269+00:00",
            "proofPurpose": "assertionMethod",
            "proofValue": "ltal3MWw3lcy/wtLseBCWatA2BlfNLwMdwzhXDtdiz5WqTauRJNGkS91SJhW0H/GDO/ZMUlJAYrdJFeWOJ39idSN3+AZU1DLRvr5yjnLJPsiduTBfqnnGy9AT7ilyT7scIRqdF8ffW0uUk9P6lTZog=="
          }
        }
      }
    },
    "auto_offer": false
  },
  "indy": null,
  "ld_proof": null
}
```

Step 4:
Alice
Request: v2/{cred-ex-id}/store
with cred-ex-id: e509c0bd-10e0-4a35-9436-305982535deb
```
{}
```
Response
```
{
  "cred_ex_record": {
    "state": "done",
    "created_at": "2023-09-22T09:58:17.517767Z",
    "updated_at": "2023-09-22T10:05:38.281642Z",
    "trace": false,
    "cred_ex_id": "e509c0bd-10e0-4a35-9436-305982535deb",
    "connection_id": "f50e4f82-c4c6-4305-9127-4554e20f839d",
    "thread_id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
    "initiator": "external",
    "role": "holder",
    "cred_offer": {
      "@type": "https://didcomm.org/issue-credential/2.0/offer-credential",
      "@id": "9dece615-6e34-4126-8f9d-e0422ce43c58",
      "~thread": {},
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc-detail@v1.0"
        }
      ],
      "offers~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
          }
        }
      ]
    },
    "cred_request": {
      "@type": "https://didcomm.org/issue-credential/2.0/request-credential",
      "@id": "2c5dca35-cf95-4cb6-9d78-8e0756c0bfdf",
      "~thread": {
        "thid": "9dece615-6e34-4126-8f9d-e0422ce43c58"
      },
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc-detail@v1.0"
        }
      ],
      "requests~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJjcmVkZW50aWFsIjogeyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9fSwgIm9wdGlvbnMiOiB7InByb29mVHlwZSI6ICJCYnNCbHNTaWduYXR1cmUyMDIwIn19"
          }
        }
      ]
    },
    "cred_issue": {
      "@type": "https://didcomm.org/issue-credential/2.0/issue-credential",
      "@id": "68ce910b-f3cc-4b93-b0ab-507de1ba261f",
      "~thread": {
        "thid": "9dece615-6e34-4126-8f9d-e0422ce43c58"
      },
      "formats": [
        {
          "attach_id": "ld_proof",
          "format": "aries/ld-proof-vc@v1.0"
        }
      ],
      "credentials~attach": [
        {
          "@id": "ld_proof",
          "mime-type": "application/json",
          "data": {
            "base64": "eyJAY29udGV4dCI6IFsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCAiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvZXhhbXBsZXMvdjEiLCAiaHR0cHM6Ly93M2lkLm9yZy9zZWN1cml0eS9iYnMvdjEiXSwgInR5cGUiOiBbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwgIlVuaXZlcnNpdHlEZWdyZWVDcmVkZW50aWFsIl0sICJpc3N1ZXIiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmoiLCAiaXNzdWFuY2VEYXRlIjogIjIwMjAtMDEtMDFUMTI6MDA6MDBaIiwgImNyZWRlbnRpYWxTdWJqZWN0IjogeyJpZCI6ICJkaWQ6a2V5OnpVQzcxalZSTG10cVJBWEZXbUF2U1ExVFdGemdRdHVpTEd4U2R5Sm45RUd6d05WeGdqWlNwNnRqRndUcmZ6WHBZV0Fwb3VXZHJWZ2NpRHQ5dm9UeTRQbVo5NWhzZ0Uzd0JVUFhOdmhYTGd4dndTVkFaSmg5dVpHZUo5OHFyWFFWRUNyWktWSCIsICJnaXZlbk5hbWUiOiAiU2FsbHkyNiIsICJmYW1pbHlOYW1lIjogIlN0dWRlbnQiLCAiZGVncmVlIjogeyJ0eXBlIjogIkJhY2hlbG9yRGVncmVlIiwgImRlZ3JlZVR5cGUiOiAiVW5kZXJncmFkdWF0ZSIsICJuYW1lIjogIkJhY2hlbG9yIG9mIFNjaWVuY2UgYW5kIEFydHMifSwgImNvbGxlZ2UiOiAiRmFiZXIgQ29sbGVnZSJ9LCAicHJvb2YiOiB7InR5cGUiOiAiQmJzQmxzU2lnbmF0dXJlMjAyMCIsICJ2ZXJpZmljYXRpb25NZXRob2QiOiAiZGlkOmtleTp6VUM3RHRrRmZKUzd1Z21qN2ZkQXpHaVZuNERncHFqN3dXQnU2UnhCYUMxWUZvUnRxd204akRxVzhmdkFVNFZ4c3hSUm5IWlQyZ3NIYTZKZmt3ZGZzOEVaV1R0MXh0TTR1N053dlMyZFFZRXBMR2l5QTV3b0c3WER3UWVkS1luS1V2VU55MmojelVDN0R0a0ZmSlM3dWdtajdmZEF6R2lWbjREZ3Bxajd3V0J1NlJ4QmFDMVlGb1J0cXdtOGpEcVc4ZnZBVTRWeHN4UlJuSFpUMmdzSGE2SmZrd2RmczhFWldUdDF4dE00dTdOd3ZTMmRRWUVwTEdpeUE1d29HN1hEd1FlZEtZbktVdlVOeTJqIiwgImNyZWF0ZWQiOiAiMjAyMy0wOS0yMlQxMDowMzo1OC43MDcyNjkrMDA6MDAiLCAicHJvb2ZQdXJwb3NlIjogImFzc2VydGlvbk1ldGhvZCIsICJwcm9vZlZhbHVlIjogImx0YWwzTVd3M2xjeS93dExzZUJDV2F0QTJCbGZOTHdNZHd6aFhEdGRpejVXcVRhdVJKTkdrUzkxU0poVzBIL0dETy9aTVVsSkFZcmRKRmVXT0ozOWlkU04zK0FaVTFETFJ2cjV5am5MSlBzaWR1VEJmcW5uR3k5QVQ3aWx5VDdzY0lScWRGOGZmVzB1VWs5UDZsVFpvZz09In19"
          }
        }
      ]
    },
    "by_format": {
      "cred_offer": {
        "ld_proof": {
          "credential": {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://www.w3.org/2018/credentials/examples/v1",
              "https://w3id.org/security/bbs/v1"
            ],
            "type": [
              "VerifiableCredential",
              "UniversityDegreeCredential"
            ],
            "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "issuanceDate": "2020-01-01T12:00:00Z",
            "credentialSubject": {
              "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
              "givenName": "Sally26",
              "familyName": "Student",
              "degree": {
                "type": "BachelorDegree",
                "degreeType": "Undergraduate",
                "name": "Bachelor of Science and Arts"
              },
              "college": "Faber College"
            }
          },
          "options": {
            "proofType": "BbsBlsSignature2020"
          }
        }
      },
      "cred_request": {
        "ld_proof": {
          "credential": {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://www.w3.org/2018/credentials/examples/v1",
              "https://w3id.org/security/bbs/v1"
            ],
            "type": [
              "VerifiableCredential",
              "UniversityDegreeCredential"
            ],
            "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "issuanceDate": "2020-01-01T12:00:00Z",
            "credentialSubject": {
              "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
              "givenName": "Sally26",
              "familyName": "Student",
              "degree": {
                "type": "BachelorDegree",
                "degreeType": "Undergraduate",
                "name": "Bachelor of Science and Arts"
              },
              "college": "Faber College"
            }
          },
          "options": {
            "proofType": "BbsBlsSignature2020"
          }
        }
      },
      "cred_issue": {
        "ld_proof": {
          "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1",
            "https://w3id.org/security/bbs/v1"
          ],
          "type": [
            "VerifiableCredential",
            "UniversityDegreeCredential"
          ],
          "issuer": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
          "issuanceDate": "2020-01-01T12:00:00Z",
          "credentialSubject": {
            "id": "did:key:zUC71jVRLmtqRAXFWmAvSQ1TWFzgQtuiLGxSdyJn9EGzwNVxgjZSp6tjFwTrfzXpYWApouWdrVgciDt9voTy4PmZ95hsgE3wBUPXNvhXLgxvwSVAZJh9uZGeJ98qrXQVECrZKVH",
            "givenName": "Sally26",
            "familyName": "Student",
            "degree": {
              "type": "BachelorDegree",
              "degreeType": "Undergraduate",
              "name": "Bachelor of Science and Arts"
            },
            "college": "Faber College"
          },
          "proof": {
            "type": "BbsBlsSignature2020",
            "verificationMethod": "did:key:zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j#zUC7DtkFfJS7ugmj7fdAzGiVn4Dgpqj7wWBu6RxBaC1YFoRtqwm8jDqW8fvAU4VxsxRRnHZT2gsHa6Jfkwdfs8EZWTt1xtM4u7NwvS2dQYEpLGiyA5woG7XDwQedKYnKUvUNy2j",
            "created": "2023-09-22T10:03:58.707269+00:00",
            "proofPurpose": "assertionMethod",
            "proofValue": "ltal3MWw3lcy/wtLseBCWatA2BlfNLwMdwzhXDtdiz5WqTauRJNGkS91SJhW0H/GDO/ZMUlJAYrdJFeWOJ39idSN3+AZU1DLRvr5yjnLJPsiduTBfqnnGy9AT7ilyT7scIRqdF8ffW0uUk9P6lTZog=="
          }
        }
      }
    },
    "auto_offer": false,
    "auto_issue": false,
    "auto_remove": true
  },
  "indy": null,
  "ld_proof": {
    "created_at": "2023-09-22T10:05:38.269736Z",
    "updated_at": "2023-09-22T10:05:38.269736Z",
    "cred_ex_ld_proof_id": "77358d30-5db5-4dc7-93d3-ba953abb72f6",
    "cred_ex_id": "e509c0bd-10e0-4a35-9436-305982535deb",
    "cred_id_stored": "1deed3c1340841ddb278a064c999fbd8"
  }
}
