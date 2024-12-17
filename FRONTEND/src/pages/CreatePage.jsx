import { useContext, useState } from "react";
import {context} from '../context/context';
import axios from 'axios';

function ReadPage() {
    const [name, setName] = useState('');
    const [reg, setReg] = useState('');
    const [message, setMessage] = useState('');
    const { setList } = useContext(context);

    async function createData(e) {
        e.preventDefault(); // Prevent the form from refreshing the page
        
        try {
            const response = await axios.post('http://localhost:3000/api/v1/data/list', { name, reg });
            const data = response.data;

            // Check if the data is successfully created
            if (data.name === name) {
                setMessage('Data created successfully!');
                setList(it => [...it, data]);  // Update the list in the context
            }
        } catch (error) {
            console.error('Error creating data:', error);
            setMessage('Error creating data!');
        }
    }

    return (
        <div>
            <form className="w-full max-w-sm mx-auto mt-8" onSubmit={createData}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Enter name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                        We'll never share your name with anyone else.
                    </p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Regd Number
                    </label>
                    <input
                        type="text"
                        value={reg}
                        onChange={(e) => setReg(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>

            {message && (
                <div className="mt-4 p-4 bg-green-500 text-white text-center rounded-md">
                    {message}
                </div>
            )}
        </div>
    );
}

export default ReadPage;
