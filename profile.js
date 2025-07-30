document.addEventListener('DOMContentLoaded', function() {
    function loadProfiles() {
        const farmerProfiles = JSON.parse(localStorage.getItem('farmerProfiles')) || [];
        const profilesContainer = document.getElementById('profiles-container');
        profilesContainer.innerHTML = ''; // Clear any existing profiles

        farmerProfiles.forEach((profile, index) => {
            const profileElement = document.createElement('div');
            profileElement.classList.add('col-md-4', 'profile-card');

            profileElement.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top" src="${profile.profilePic || 'default-pic.png'}" alt="Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${profile.name}</h5>
                        <p class="card-text">${profile.email}</p>
                        <p class="card-text">${profile.bio}</p>
                        <p class="card-text">Farm: ${profile.farm}</p>
                        <p class="card-text">Crops: ${profile.crops}</p>
                        <button class="btn btn-danger" id="delete-button-${index}">Delete Profile</button>
                    </div>
                </div>
            `;

            profilesContainer.appendChild(profileElement);

            // Event listener for delete button
            document.getElementById(`delete-button-${index}`).addEventListener('click', function() {
                handleProfileDeletion(index);
            });
        });
    }

    function handleProfileDeletion(index) {
        if (confirm('Are you sure you want to delete this profile?')) {
            let farmerProfiles = JSON.parse(localStorage.getItem('farmerProfiles')) || [];
            farmerProfiles.splice(index, 1);
            localStorage.setItem('farmerProfiles', JSON.stringify(farmerProfiles));
            alert('Profile deleted');
            loadProfiles();
        }
    }

    loadProfiles();
});