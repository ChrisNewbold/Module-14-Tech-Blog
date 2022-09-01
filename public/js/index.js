$(function() {
    $("#blogwrap").on("click", (e) => {
      e.preventDefault();
      const targetID = e.target.id.split("-"); // viewBlog-1, ["viewBlog, "1"]
        if (targetID[0] == "viewBlog") {
            
            console.log(targetID[1]);
          try {
            window.location.href = `/${targetID[1]}`;
  
          } catch (err) {
              console.log(err);
          }
        }
  
      })
  });