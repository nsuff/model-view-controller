async function deleteFormHandler(event) {
    event.preventDefault();
  
    const sesh = document.getElementById('sessionuser').innerHTML;
    const food_user = document.getElementById('fooduser').innerHTML;
    const food_potluck = document.getElementById('foodpotluck').innerHTML;
    const pid = String(food_potluck);
    const link = '/potluck/'+pid;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    if (sesh === food_user) {
      
    
      var response = await fetch(`/api/foods/${id}`, {
        method: 'DELETE'
      });

      //alert('this is working')
    } else if (sesh != food_user) {
      alert('You cannot delete a food you did not make!')
    }
  
    if (response.ok) {
      document.location.replace(link);
      //history.go();
      //window.location=document.referrer;
    } else {
      alert(response.statusText);
    }
    //history.back();
    //alert(sesh + food_user + food_potluck + id);
  }
  
  document.getElementById('delete-btn').addEventListener('click', deleteFormHandler);
  