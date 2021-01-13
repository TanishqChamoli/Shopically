<?php
      echo"hwllo";
    // Check if form is submitted successfully 
    if(isset($_POST["filterSubmit"]))  
    { 
        // Check if any option is selected 
        if(isset($_POST["colours"]))  
        { 
            // Retrieving each selected option 
            foreach ($_POST['colours'] as $color)  
                echo "You selected $color<br/>"; 
        } 
    else
        echo "Select an option first !!"; 
    }
?>
