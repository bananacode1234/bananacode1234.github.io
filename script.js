  let sudo = false;
  let asWho = null;
  document.getElementById('b1').onclick=function(){
    if(sudo==true){
      sudo = false;
      alert("Session ended. Goodbye "+asWho+".")
      asWho = null;
      document.getElementById('b1').innerHTML='SUDO mode';
      document.getElementById('admin').style.display='none';
      document.querySelector('title').innerHTML='Home';
    }else{
      let username=prompt('Username:').toUpperCase();
      if(username=='BOOGA MASTER'||username=='BG'){
        if(prompt('Password:')=='epikboi1234'){
          alert('Welcome, booga master.');
          sudo = true;
          asWho = 'booga master';
          document.getElementById('b1').innerHTML='End SUDO session';
          document.getElementById('admin').style.display='block';
          document.querySelector('title').innerHTML='Home (SUDO mode)';
        }else{
          alert('Invalid password.');
        }
      }else if(username=='OOGA MASTER'||username=='OG'){
        if(prompt('Password:')=='687'){
          alert('Welcome, ooga master.');
          sudo = true;
          asWho = "booga master"; 
          document.getElementById('b1').innerHTML='End SUDO session';
          document.getElementById('admin').style.display='block';
          document.querySelector('title').innerHTML='Home (SUDO mode)';
        }else{
          alert('Invalid password.');
        }
      }else{
        alert('Invalid username.');
      }
    }
  }
  let cmdline=document.getElementById('cmdline');
  function enter(){
    let cmd=cmdline.value.toUpperCase();
    if(cmd=='EPIK()'){
      alert('I');
      alert('hope');
      alert('that');
      alert('the');
      alert('ad');
      alert('does');
      alert('not');
      alert('save');
      alert('you');
      alert(':)');
      document.getElementById('epik').click();
    }else if(cmd=='SESSION.END()'){
      sudo = false;
      alert("Session ended. Goodbye "+asWho+".")
      asWho = null;
      document.getElementById('b1').innerHTML='SUDO mode';
      document.getElementById('admin').style.display='none';
      document.querySelector('title').innerHTML='Home';
    }else if(cmd=='SUMMON(BELUGA)'){
      document.getElementById('beluga').style.display='block';
    }else if(cmd=='KILL(BELUGA)'){
      if(confirm('Are you sure you wanna kill the most epik person on earth?')){
        alert('...');
        if(prompt('Say "Goodbye beluga" if you really want to...').toUpperCase()=='GOODBYE BELUGA'){
          alert('Wow...');
          document.getElementById('beluga').style.display='none';
        }else{
          alert('Yay!');
        }
      }else{
        alert('Than he must stay.');
      }
    }else if(cmd=='DARK_MODE = TRUE'||cmd=='DARK_MODE=TRUE'){
      document.querySelector('body').style.color='white';
      document.querySelector('body').style.backgroundColor='black';
      document.getElementById('b2').style.backgroundColor='white'
      document.getElementById('b2').style.color='black';
    }else if(cmd=='DARK_MODE = FALSE'||cmd=='DARK_MODE=FALSE'){
      document.querySelector('body').style.color='black';
      document.querySelector('body').style.backgroundColor='white';
      document.getElementById('b2').style.backgroundColor='black'
      document.getElementById('b2').style.color='white';
    }else if(cmd=='HELP()'||cmd=='IDONO()'){
      alert('Here are the commands:');
      alert('1. epik()\n2. session.end()\n3. summon(beluga)\n4. kill(beluga)\n5. dark_mode = true\n6. dark_mode = false\n7. help() / idono()');
    }else{
      alert('Invalid command.');
      cmdline.value='';
    }
  }
  document.getElementById('b2').onclick=function(){enter()}
  window.onkeydown=function(){if(sudo){if(event.key=='Enter'){setTimeout(function(){enter()},200)}}}
