import Contact from "../models/contact.js";
// READ ALL CONTACT
export const getAllContact = async (req, res) =>{
    try{
        const contacts = await Contact.find() // db.contacts.find() if using mongo shell
        res.status(200).json(contacts);// 200 HTTP status code for success
    }catch(error){
        res.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }

};

// read contact by id
export const getContactbyId = async (req, res) =>{
    try{
        const contacts = await Contact.findById(req.params.id) // db.contacts.findById(req.params.id) if using mongo shell
        if(!contacts){
            return res.status(404).json({message:'contacts not found'});// 404 HTTP status code for not found
        }
        res.status(200).json(contacts);// 200 HTTP status code for success
    }catch(error){
        res.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }

};

//create new contact
export const createContact = async(req,res) => {
    try{
        const newContact = new Contact(req.body); // create a new contact instance
        const savedContact = await newContact.save(); // save the contacts to db
        res.status(201).json(savedContact); // 201 HTTP status code for created
    }catch(error){
        res.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }
} ;

// UPDATE CONTACTS BY ID
export const updateContact = async(req,res) => {
    try{
        const updateContact = await Contact.findByIdAndUpdate(req.params.id,req.body,
            {new:true,runValidators:true}); 

            if(!updateContact){
                return res.status(404).json({message:'contacts not found'});// 404 HTTP status code for not found
            }
        res.status(200).json(updateContact); // 200 HTTP status code for success
    }catch(error){
        res.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }
} ;


//Delete contact by id
export const deleteContact = async(req,res) => {
    try{
        const deleteContact =  await Contact.findByIdAndDelete(req.params.id); 
        if(!deleteContact){
            return res.status(404).json({message:'contacts not found'});
        }
         res.status(200).json(deleteContact); // 200 HTTP status code for success
    }catch(error){
        res.status(500).json({message: error.message});// 500 HTTP status code for server errpr

    }
     
} ;