import React, { useState } from 'react';
import './addProperty.css'


function AddPropertyForm() {
    const [address, setAddress] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBaths] = useState('');
    const [sqft, setSqft] = useState('');
    const [price, setPrice] = useState('');
    const [photos, setPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [formError, setFormError] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
        case 'address':
            setAddress(value);
            break;
        case 'propertyType':
            setPropertyType(value);
            break;
        case 'beds':
            setBeds(value);
            break;
        case 'baths':
            setBaths(value);
            break;
        case 'sqft':
            setSqft(value);
            break;
        case 'price':
            setPrice(value);
            break;
        case 'photos':
            setPhotos(event.target.files);
            break;
        case 'description':
            setDescription(value);
            break;
        default:
            break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            address.trim() === '' ||
            propertyType.trim() === '' ||
            beds.trim() === '' ||
            baths.trim() === '' ||
            sqft.trim() === '' ||
            price.trim() === '' ||
            photos.length === 0 ||
            description.trim() === ''
        ) {
            setFormError(true);
            return;
        }
        // Form submission logic
    };

    return (
        <div>
            <div className="property-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            className='address'
                            value={address}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="propertyType">Property Type</label>
                        <select
                            name="propertyType"
                            value={propertyType}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Property Type</option>
                            <option value="Single House">Single House</option>
                            <option value="Condo/Apartment">Condo/Apartment</option>
                            <option value="Townhouse">Townhouse</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="beds">Beds</label>
                        <input
                            type="number"
                            name="beds"
                            step="1"
                            value={beds}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="baths">Baths</label>
                        <input
                            type="number"
                            name="baths"
                            step="0.5"
                            value={baths}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="sqft">Sqft</label>
                        <input
                            type="text"
                            name="sqft"
                            className='sqft'
                            value={sqft}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price ($)</label>
                        <input
                            type="text"
                            name="price"
                            className='price'
                            value={price}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="photos">Photos</label>
                        <input
                            type="file"
                            name="photos"
                            multiple
                            accept="image/*"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    {formError && (
                        <div className="error-message">
                            Please fill out all the fields before submitting the form.
                        </div>
                    )}
                    <button type="submit">Add Property</button>
                </form>
            </div>
        </div>
    );
};
  
export default AddPropertyForm;