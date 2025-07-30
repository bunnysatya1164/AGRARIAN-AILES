document.addEventListener('DOMContentLoaded', function() {
    function loadProfileForUpdate() {
        const farmerProfile = JSON.parse(localStorage.getItem('farmerProfile'));
        
        if (farmerProfile) {
            document.getElementById('update-name').value = farmerProfile.name;
            document.getElementById('update-email').value = farmerProfile.email;
            document.getElementById('update-bio').value = farmerProfile.bio;
            document.getElementById('update-farm').value = farmerProfile.farm;
            document.getElementById('update-crops').value = farmerProfile.crops;
        }
    }

    function handleProfileUpdate(event) {
        event.preventDefault();

        const updatedProfile = {
            name: document.getElementById('update-name').value,
            email: document.getElementById('update-email').value,
            bio: document.getElementById('update-bio').value,
            farm: document.getElementById('update-farm').value,
            crops: document.getElementById('update-crops').value
        };

        const profilePicInput = document.getElementById('update-profilePic');
        
        if (profilePicInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function() {
                updatedProfile.profilePic = reader.result;
                localStorage.setItem('farmerProfile', JSON.stringify(updatedProfile));
                alert('Profile updated');
                window.location.href = 'actor.html';
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        } else {
            const farmerProfile = JSON.parse(localStorage.getItem('farmerProfile'));
            updatedProfile.profilePic = farmerProfile.profilePic;
            localStorage.setItem('farmerProfile', JSON.stringify(updatedProfile));
            alert('Profile updated');
            window.location.href = 'actor.html';
        }
    }

    // Initial load
    loadProfileForUpdate();

    // Event listener for update form
    document.getElementById('update-profile-form').addEventListener('submit', handleProfileUpdate);
});
