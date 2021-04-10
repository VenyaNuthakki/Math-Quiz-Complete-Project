var player1_name=localStorage.getItem("player1key");
var player2_name=localStorage.getItem("player2key");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question-turn "+player1_name;
document.getElementById("player_answer").innerHTML="answer-turn "+player2_name;
function send() {
    var n1 = Number(document.getElementById("number1").value);
    var n2 = Number(document.getElementById("number2").value);
    actual_answer=n1*n2;
    question_tag="<h3>"+n1+" X "+n2+"</h3>"
    input_tag="<br>Answer:<input type='text' id='answer'>";
    button_tag="<br><button onclick='check()'>Check</button>"
    row=question_tag+input_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
  }
  question_turn="player1";
  answer_turn="player2";
  function check(){
    var user_answer=document.getElementById("answer").value;
    if(actual_answer==user_answer){
      if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
      }
      else{
        player2_score=player2_score+1
        document.getElementById("player2_score").innerHTML=player2_score;
      }
    }
    if(question_turn=="player1"){
      question_turn="player2"
      document.getElementById("player_question").innerHTML="question-turn "+player2_name;
    }
    else{
      question_turn="player1"
      document.getElementById("player_question").innerHTML="question-turn "+player1_name;
    }
    if(answer_turn=="player1"){
      answer_turn="player2"
      document.getElementById("player_answer").innerHTML="answer-turn "+player2_name;
    }
    else{
      answer_turn="player1"
      document.getElementById("player_answer").innerHTML="answer-turn "+player1_name;
    }
    document.getElementById("output").innerHTML="";
  }