import express from 'express';
import {createContact, deleteContact,
    getContactbyId,getAllContact,
    updateContact } from '../controllers/contactController.js';

const router = express.Router();

//create
router.post('/',createContact);
//read all
router.get ('/',getAllContact);
//read by id
router.get('/:id',getContactbyId);
//update by id
router.put('/:id',updateContact);
//delete by id
router.delete('/:id',deleteContact);

export default router;