# AWS CDK SES Domain Configuration

This Typescript CDK project configures a domain identity in SES.

After the configuration SES will be enabled for sending email on your domain.

CDK Custom Resources are used to configure SES and add verified email addresses.

A more detailed explanation is available [in this Medium article](https://markilott.medium.com/configure-aws-ses-to-send-email-for-your-domain-26d022897b21).

&nbsp;

## Requirements

- A domain you can modify. You can actually run this and complete the configuration without it but will not be able to send email.
- A Route53 Domain in the target Account is required for fully automated setup. Domain records can be manually added to an external domain if none is available in the Account.

&nbsp;

## Setup

Assuming you have the AWS CLI and CDK installed and configured already...

Setup the project:
- Clone the repo
- run `npm install`
- Update the `config/index.ts` file with your own preferences

&nbsp;

## Options

- `sesAttr.emailList` - a list of email addresses to be verified in the account. By default you can only send to these email addresses.
- `sesAttr.notifList` - a list of email addresses to be attached to the SNS notification topic. These will receive notifications of email send events.
- `sesAttr.sendDeliveryNotifications` - send delivery notifications (Send, Delivery, Open) in addition to errors (Bounce, Complaint, Reject).
- `domainAttr.zoneName` - the Zone Name (the domain name you will be verifying)
- `domainAttr.hostedZoneId` - the Route53 Zone Id for the domain.

&nbsp;

## Manual Domain Verification

- If you are not using a local Route53 domain then you must manually verify the external domain by adding DKIM records.
- The 3 required DKIM records are output by the CloudFormation template
- DKIM verification typically takes 10-15mins but can be longer

The records are entered as CNAMES, like this:

`67ku2xjbm6yqupbfsdh3w7lhtmmabcdef._domainkey.mydomain.com CNAME 67ku2xjbm6yqupbfsdh3w7lhtmmabcdef.dkim.amazonses.com`

&nbsp;

## Deployment

Use CDK to deploy:
`cdk deploy --all`

&nbsp;

## Testing

SES messaging is in sandbox mode by default. You will only be able to send email to addresses you have verified until you apply to move to production mode.

To send an email test from the CLI:

```shell
aws sesv2 send-email \
  --from-email-address "no-reply@my-ses-domain.com" \
  --destination "ToAddresses=me@mydomain.com" \
  --content "Simple={Subject={Data=Hello World,Charset=utf8},Body={Text={Data=Hi from SES,Charset=utf8},Html={Data=<p>Hi from SES<p>,Charset=utf8}}}"
```

Note the following:
- You can use any address @ your verified SES domain as the from address
- The destination must be one of the verified email addresses you added

&nbsp;

## Costs and Cleanup

There is no cost for any of the resources deployed here unless you manage to send 62,000+ emails in a month.

Use `cdk destroy` or delete the CloudFormation stack.

All of the configuration and verified emails and subscriptions will be deleted.
