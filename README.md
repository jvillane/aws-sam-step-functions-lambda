# The worst number logic (aka aws-sam-step-functions-lambda)
A simple example that shows the potential of **AWS Step Functions** using:

- TypeScript + Node for lambda implementation
- TypeScript + Jest for unit testing 
- API Gateway + OpenAPI/Swagger integration for API validation
- AWS SAM for infrastructure templating

## Requirements

- Node + NPM
- aws-cli (installed and configured)
- aws-sam-cli

## Deployment

There's a sh file called `deploy.sh` meant to be used for infrastructure creating/updating:

`sh deploy.sh <STACK_NAME> <S3_BUCKET>`

Where:

- `STACK_NAME` is the name of the stack
- `S3_BUCKET` refers to an existing S3 bucket where the OpenAPI definition is going to be upload

## The Result

TODO: Complete the result
