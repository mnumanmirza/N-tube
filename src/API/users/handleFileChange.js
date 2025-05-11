const handleFileChange = async (e) => {
  const { id, files } = e.target;
  if (files[0]) {
    try {
      if (id === 'avatar') {
        setLoading(true);
        console.log('Uploading avatar:', files[0]);

        const response = await updateUserAvatar(files[0]);

        console.log('Response from updateUserAvatar:', response);

        if (response?.data?.avatar) {
          setFormData((prev) => ({
            ...prev,
            avatar: response.data.avatar,
            avatarPreview: URL.createObjectURL(files[0]),
          }));
          toast.success('Avatar updated successfully!');
        } else {
          throw new Error('Failed to update avatar');
        }
      } else if (id === 'coverImage') {
        setCoverLoading(true);
        console.log('Uploading cover image:', files[0]);

        const response = await updateCoverImage(files[0]);

        console.log('Response from updateCoverImage:', response);

        if (response?.data?.coverImage) {
          setFormData((prev) => ({
            ...prev,
            coverImage: response.data.coverImage,
            coverImagePreview: URL.createObjectURL(files[0]),
          }));
          toast.success('Cover image updated successfully!');
        } else {
          throw new Error('Failed to update cover image');
        }
      }
    } catch (error) {
      console.error(`${id === 'avatar' ? 'Avatar' : 'Cover Image'} Update Error:`, error);
      toast.error(error.message || 'Update failed');
    } finally {
      if (id === 'avatar') setLoading(false);
      if (id === 'coverImage') setCoverLoading(false);
    }
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);

    console.log('Submitting form data:', Object.fromEntries(formDataToSend.entries()));

    const response = await updateAccountDetail(formDataToSend);

    console.log('Response from updateAccountDetail:', response);

    if (response.success) {
      toast.success('Profile details updated successfully!');
      fetchUserData(); // Refresh user data after successful update
    } else {
      throw new Error(response.message || 'Failed to update profile');
    }
  } catch (error) {
    console.error('Error during profile update:', error);
    toast.error(error.message || 'Update failed');
  } finally {
    setLoading(false);
  }
};