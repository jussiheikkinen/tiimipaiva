import mongoose, { Schema } from 'mongoose';

/**
 * npm i mongoose
 * npm i typescript@^4.6.4 
 */

/**
 * Comment to database
 */
export async function connect() {
    await mongoose.connect('mongodb://localhost/my-db');
}

/*
 * Schema for mongo collection
 */
const Employee = new Schema({
    name: { type: String, default: 'Dummy' },
    age: { type: Number, min: 18, index: true },
    date: { type: Date, default: Date.now },
  });

export const EmployeeModel = mongoose.model('Employee', Employee);


// Tietueen tallentaminen
// const employee = new EmployeeModel();
// employee.name = 'Jussi';
// employee.save();

// Tietueen lukeminen
// const saved = await EmployeeModel.findOne({ name: 'Jussi' });
