import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMemberById, updateMember } from '../environments/apiService'; // Ensure the import path is correct
import userImage from '../assets/img/user.png'; // Import the user image

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [photos, setPhotos] = useState([]); // State for managing photos
    const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
    const [isSaving, setIsSaving] = useState(false); // State to manage save loading
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const username = localStorage.getItem('username'); // Get username from local storage
            if (!username) {
                navigate('/login'); // Redirect if no username
                setIsLoading(false);
                return;
            }
            try {
                const userData = await getMemberById(username); // Fetch user data
                setUser(userData);
                setPhotos(userData.photos || []); // Initialize photos state
            } catch (error) {
                console.error('Error fetching user information:', error);
                setError('An error occurred while fetching user information. Please try again.');
                navigate('/login'); // Redirect if there's an error
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handlePhotoUpload = (e) => {
        const newPhotos = Array.from(e.target.files).map(file => URL.createObjectURL(file));
        setPhotos((prev) => [...prev, ...newPhotos]);
    };

    const handleDeletePhoto = (photo) => {
        setPhotos((prev) => prev.filter((p) => p !== photo));
    };

    const saveChanges = async () => {
        setIsSaving(true); // Start saving
        const updatedUser = { ...user, photos }; // Update user object with new photos
        try {
            await updateMember(updatedUser); // Update the member in the backend
            alert('Changes saved successfully!'); // Notify the user
        } catch (error) {
            setError('An error occurred while saving changes. Please try again.'); // Handle errors
        } finally {
            setIsSaving(false); // Stop saving
            setIsEditing(false); // Exit edit mode
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    

    if (isLoading)
        return (
            <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
                <div className="animate-spin h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ); // Loading state

    if (error)
        return (
            <div className="container mx-auto p-4">
                <p className="text-red-500">{error}</p>
            </div>
        );

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-row">
                <div className="w-1/4">
                    <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
                </div>
                <div className="w-3/4">
                    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                        <div className="mb-4">
                            <img
                                src={user.photos && user.photos.length > 0 ? user.photos[0] : userImage}
                                alt={user.name}
                                className="w-full h-64 object-cover rounded-lg mb-4 w-24 h-full"
                            />

                            <div>
                                <label><strong>Username:</strong></label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={user.userName}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                            <div>
                                <label><strong>Location:</strong></label>
                                <input
                                    type="text"
                                    name="city"
                                    value={user.city}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                            <div>
                                <label><strong>Gender:</strong></label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={user.gender}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                            <div>
                                <label><strong>Date of Birth:</strong></label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={user.dateOfBirth.split("T")[0]}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                            <div>
                                <label><strong>Profile Title:</strong></label>
                                <input
                                    type="text"
                                    name="profileTitle"
                                    value={user.profileTitle}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                            <div>
                                <label><strong>Email:</strong></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                            <div>
                                <label><strong>Phone Number:</strong></label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={user.phoneNumber}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                    className={`border ${!isEditing ? 'bg-gray-200' : 'bg-white'} rounded p-2 w-full`}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Photos</h3>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="mt-2 mb-4"
                            />
                            <div className="grid grid-cols-3 gap-4">
                                {photos.map((photo, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={photo}
                                            alt={`Uploaded ${index}`}
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                        <button
                                            onClick={() => handleDeletePhoto(photo)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            {isEditing ? (
                                <button
                                    className="btn bg-green-500 text-white rounded p-2"
                                    onClick={saveChanges} // Call save changes function
                                    disabled={isSaving} // Disable button while saving
                                >
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </button>
                            ) : (
                                <button
                                    className="btn bg-blue-500 text-white rounded p-2"
                                    onClick={() => setIsEditing(true)} // Enable edit mode
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Add any other sections as needed, such as Experience, Education, etc. */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
