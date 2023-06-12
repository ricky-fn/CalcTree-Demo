# CalcTree Dynamic UI Clone

This project is a clone of the dynamic UI from the "That’s why we built CalcTree!" section of the CalcTree official website. The original website uses JavaScript to power the animation, but this project re-implements the UI and animation using pure CSS for improved performance.

## Demo

Check out the live demo of the project [here](https://d2wjbcto3l3qqp.cloudfront.net/).

## Tech Stack

- Vite.js
- React
- TypeScript
- Tailwind CSS
- AWS CloudFormation
- GitHub CI/CD

## Installation

1. Clone the repository:
```shell
git clone <repository-url>
cd <project-folder>
```

2. Install the dependencies:

```shell
npm install
```

## Usage

1. Start the development server:

```
npm run dev
```
This will start the Vite development server and launch the application in your browser. You can now make changes to the code and see the live updates.

2. Build the project for production:

```
npm run build
```
This will create an optimized production build of the project in the dist directory.
  
## Deployment
To deploy the project, follow these steps:

### Prerequisites
1. Install the AWS Command Line Interface (CLI) by following the instructions [here](https://aws.amazon.com/cli/).

2. Set up your AWS credentials by running the following command and following the prompts:
```shell
aws configure
```
This will prompt you to enter your AWS Access Key ID, Secret Access Key, default region, and default output format. Make sure to provide the necessary credentials with appropriate permissions to deploy AWS resources.

### Deployment Steps

1. Deploy the SAM template to create the CloudFormation stack, S3 bucket, and CloudFront distribution:
```shell
sam deploy --guided
```
This command will guide you through the deployment process. Once the deployment is complete, make note of the ARN names of the S3 bucket and CloudFront distribution.

2. Create a new IAM role with the following permissions:
```shell
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:ListBucket",
                "s3:GetObject",
                "cloudfront:CreateInvalidation"
            ],
            "Resource": [
                "arn:aws:cloudfront::<AWS_ACCOUNT_ID>:distribution/<CLOUDFRONT_ARN>",  // Replace <AWS_ACCOUNT_ID> with your AWS account ID and <CLOUDFRONT_ARN> with your CloudFront distribution ARN
                arn:aws:s3:::<S3_BUCKET_NAME>, // Replace <S3_BUCKET_NAME> with your S3 bucket name.
                "arn:aws:s3:::<S3_BUCKET_NAME>/*"
            ]
        }
    ]
}
```
3. Create an access key and secret key for the newly created IAM role.
4. Open the .github/workflows/deploy.yml file and update the following parameters for GitHub CI/CD deployment:
* <AWS_ACCESS_KEY_ID>: Replace with the access key for the IAM role.
* <AWS_SECRET_ACCESS_KEY>: Replace with the secret key for the IAM role.
* <AWS_REGION>: Replace with your desired AWS region.
* <CLOUDFRONT_ARN>: Replace with your CloudFront distribution ARN.
* <S3_BUCKET_NAME>: Replace with your S3 bucket name.


This workflow file sets up the automatic deployment of the frontend static code to AWS whenever a push action is triggered on the main branch.

5. Once these steps are completed and pushed to the GitHub repository, the next push action triggered on the main branch will automatically deploy the frontend static code to AWS using GitHub CI/CD.