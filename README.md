[![Build Status](https://travis-ci.org/mjacquet/EducationReimbursementApp.svg?branch=master)](https://travis-ci.org/mjacquet/EducationReimbursementApp)

## Education Reimbursement Sample App for Force.com

This App is a sample app you can use as a starting point to create an Education Reimbursmeent Process.

## Installation

### Salesforce DX - new scratch org

Clone the repo to your local file system.

```
git clone hhttps://github.com/mjacquet/EducationReimbursementApp
```

Change into the git repo directory and create a new scratch org

```
sfdx force:org:create -s -f config/project-scratch-def.json
```

Push the source to the newly created org.
```
sfdx force:source:push
```

### Salesforce DX - existing scratch org

If you want to add the wrapper to an existing org you can either copy the contents manually from this repo.

Alternatively you can use [Wade's OSS plugin for Salesforce DX](https://github.com/wadewegner/sfdx-oss-plugin).

### Salesforce DX - deploy online into a scratch org

Again thanks to Wade for creating this neat feature.

[![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com/deploy?template=https://github.com/mjacquet/EducationReimbursementApp)

### Post-install steps

Assign the Permission Set to your user
```
sfdx force:user:permset:assign -n Education_Reimbursement_App
```

## Contributions
We are welcoming contributions to make this a better starting point for the community needs - just send Pull Requests our way!

