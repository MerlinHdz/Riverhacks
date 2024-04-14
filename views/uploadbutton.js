// Function to open the modal for image upload
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Function to handle image upload
  function uploadImages() {
    var input = document.getElementById("image-input");
    var files = input.files;
  
    // Loop through each file and perform upload operation
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
  
      // Perform upload operation for each file (you can customize this part)
      console.log("Uploading file:", file.name);
    }
  
    // Close the modal after upload
    closeModal();
  }
  