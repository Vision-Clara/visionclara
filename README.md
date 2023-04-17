vision-clara-v.0.0.10

## Development Instructions

___
### Environments

1. BETA - develop
2. Production - main

___
### Project Design

1. Front End - React using Next.js
2. Back End - Next.js API + MongoDB
3. Hosting - Versal
4. CI/CD - Github Actions

___
### One Time Setup

1. Pull Github Repo
2. Create .env.local and put following text in it 

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.oqv89pu.mongodb.net/?retryWrites=true&w=majority
```
3. Install Dependencies -
```npm install```
4. Test your setup - ```npm run dev```

Note: Username and Password is provided to you

___
### For every new feature
1. Switch to develop branch (`git 
checkout develop`)
2. Create a new branch (`git branch feature/feature_name`)
3. Make your changes
4. Commit your changes (`git commit -am "your message"`)
5. Pull latest changes (`git pull`)
6. Push your changes (`git push`)
7. Create a pull request when feature is completed
8. Wait for review and comments
9. After review, it will be auto merged to develop branch
___