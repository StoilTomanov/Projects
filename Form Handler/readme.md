Hello ✌️

 - This is a form handler that can save some lines of code and time when it comes to work with FormData functionality. 
 
 - The function expects one parameter which represents the form object itslef. Use the DOM selectors to target the form and pass it to the funciton. 

 - The handler will take all input fields from the form and check whether they are filled or not. 

 - Reslut will be stored into an object which you can use as per your needs. 

 - If any of the fields are empty an alert window will notify which field/s is not filled in and an Error will be thrown in the console. 

 - Example of an object with empty fields:
                { 
                title: "Test Title", 
                description: false, 
                imageUrl: false, 
                type: "Fiction" 
                }

 - Example of an object without empty fields:
                { 
                title: "Test Title", 
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore non est sunt. Voluptate quaerat voluptatem iusto laudantium culpa! Nostrum aperiam vero similique veritatis omnis amet dolores tenetur aliquam voluptatem ipsum?", 
                imageUrl: "/images/2g4h53h.png", 
                type: "Fiction" 
                }

 - You might want to figure out a way of stopping the code using this handker in case of an error thrown. One way is the code ini the comments / Ln 32-43

 - One disadvantage is that the alert notification will use for field name the one set in the name attribute of the input tag, meaning it might have differences from time to time. This will be enhanced in future version of the handler.

Hope this handler helps you 🤞