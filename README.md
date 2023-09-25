# Posts app
Welcome to my technical assessment for **PRGX**!<br>
This is SPA in wich you can perform all **CRUD** operations related to posts (Create, Read, Update, delete).<br>
You can access the app deployed on **Netlify** in the following [URL](https://posts-app-assessment.netlify.app)

# Core features
- **List posts**<br>
![List Posts](/documentation_images/list_posts.jpg "List Posts")<br><br>
In this section you can perform the following actions:
    - **Search**: You can search by any field and the table will display the matching results Ex: title, userId, id (Post id), Body
    ![](/documentation_images/list_search_2.png "Search")<br><br>
    - **Filters**: You can filter the table by data filters.
    ![](/documentation_images/filters.png "Filters")<br><br>
    - **Download CSV**
    - **Print Table**
- **Create individual post**<br>
You can create individual posts.
In the **posts** section you will see a button:<br>
![](/documentation_images/create_1.png "Create Button")<br><br>
When you click that button you will be redirected to the post create section.<br>
![](/documentation_images/create_2.png "Create Section")<br><br>
You can create a post with the title and post body you want.<br>
**Note:** Both title and body fields are required and can not be empty.<br>
If the post has been created successfully, you will be automatically redirected to the **view/edit** post section and
you will see a success message.<br> 
![](/documentation_images/post_create_success.jpg "Post create success")<br><br>
- **View, edit and delete individual post**<br>
In this section you can edit the post you desire.<br>
You will be able to edit the title and body fields of your post.<br>
**Example:**<br>
![](/documentation_images/post_edited.png "Post edited")<br><br>
As you can see, after editing the fields and clicking the "Update Post Button" my post information is updated successfully.<br><br>
As well you can delete the post by clicking the "DELETE" button. If the post is deleted successfully you will be redirected to the **Posts list** section and you will see a success Message at the top of the list.<br>
**Example:**<br>
![](/documentation_images/post_deleted.png "Post deleted")<br><br>

# Installation steps for local setup
### Windows
For setup your local environment to run this project you will need to install:
- **Environment Setup**
    - Node.js
    You can install Node.js by following the steps of the next [URL](https://nodejs.org/es/download)<br>
    **Note:** When installing Node.js please don't uncheck the "Install NPM" checkbox, because npm is essential for running this project.<br><br>
    - GIT (**Optional**)<br>
    If you want to pull the repository directly from git, you need to install it if you don't already have it installed.<br>
    You can install git in the following [URL](https://git-scm.com/downloads)

### Operating systems based on Linux
For Operating systems based on Linux you can run the following commands on the terminal.
```
sudo apt-get update
sudo apt install curl
//Let's install node using nvm (node version manager)
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
//Restart terminal
bash install_nvm.sh
node -v
npm -version
```
After installing these packages you are ready to go with the next steps.
### **Project initialization**<br>
Open the terminal and run the following commands.
```
git clone https://github.com/KalaxBDJ/tech-assessment-gprx-home.git
cd tech-assessment-gprx-home
npm install
npm run dev
```
### Congratulations, Now you have your project locally.
