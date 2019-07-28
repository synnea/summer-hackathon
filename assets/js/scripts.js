
$(document).ready(function () {

    $("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  150,
        thumbnailWidth:   "auto",
        itemsBaseURL:     'https://nanogallery2.nanostudio.org/samples/',
        
        // ### gallery content ### 
        items: [
            { src: 'assets/images/boat_robot.jpg', srct: 'assets/images/boat_robot_tn.jpg', title: 'Berlin 1' },
            { src: 'assets/images/child-rc-robot.jpg', srct: 'assets/images/child-rc-robot.jpg', title: 'Berlin 2' },
            { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' }
          ]
      });
  });