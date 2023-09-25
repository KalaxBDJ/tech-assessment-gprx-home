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
