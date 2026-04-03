import { useState } from 'react';

export const services = [
  { id: 1, title: 'Site from scratch' },
  { id: 2, title: 'UX/UI design' },
  { id: 3, title: 'Product design' },
  { id: 4, title: 'Webflow site' },
  { id: 5, title: 'Motion design' },
  { id: 6, title: 'Branding' },
  { id: 7, title: 'Mobile development' },
];

export const budgetOptions = [
  { id: 1, label: '10-20k' },
  { id: 2, label: '30-40k' },
  { id: 3, label: '40-50k' },
  { id: 4, label: '50-100k' },
  { id: 5, label: '> 100k' },
];

export const useContactForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [attachment, setAttachment] = useState(null);

  const toggleService = id => {
    setSelectedServices(prev => (prev.includes(id) ? prev.filter(serviceId => serviceId !== id) : [...prev, id]));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ formData, selectedServices, selectedBudget, attachment });
  };

  return {
    selectedServices,
    selectedBudget,
    setSelectedBudget,
    formData,
    attachment,
    toggleService,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  };
};
