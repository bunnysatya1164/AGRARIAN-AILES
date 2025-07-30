document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;
        const farm = document.getElementById('farm').value;
        const crops = document.getElementById('crops').value;
        const profilePicInput = document.getElementById('profilePic');

        const reader = new FileReader();
        reader.onload = function() {
            const profilePic = reader.result;
            const farmerProfile = { name, email, bio, farm, crops, profilePic };
            saveProfile(farmerProfile);
            alert('Registration successful!');
            window.location.href = 'actor.html';
        };

        if (profilePicInput.files[0]) {
            reader.readAsDataURL(profilePicInput.files[0]);
        } else {
            alert('Please upload a profile picture.');
        }
    });

    function saveProfile(profile) {
        const farmerProfiles = JSON.parse(localStorage.getItem('farmerProfiles')) || [];
        farmerProfiles.push(profile);
        localStorage.setItem('farmerProfiles', JSON.stringify(farmerProfiles));
    }
});
