import React from 'react';

function ContactInfo() {
    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-2">
                    <div>
                        <p className="text-gray-600">Name</p>
                        <p className="text-xl font-bold">Subham</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Email</p>
                        <p className="text-xl font-bold">Subhamchauhan523@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Phone</p>
                        <p className="text-xl font-bold">7253996982</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Address</p>
                        <p className="text-xl font-bold">Nangal Raya , Delhi cantt, New Delhi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
