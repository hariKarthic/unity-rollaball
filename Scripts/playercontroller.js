#pragma strict


public var rb : Rigidbody2D;
public var speed : float;
public var count : int;
public var winText : UnityEngine.UI.Text;
public var scoretext : UnityEngine.UI.Text;

function Start () {
    
    rb = GetComponent.<Rigidbody2D>();
    speed = 500.00;
    winText.text = "";
    count = 0;
    scoretext.text = "Score is "+count;
    Debug.Log("Started");
}

function FixedUpdate () {

   var movehorizontal = Input.GetAxis('Horizontal');
   var  movevertical = Input.GetAxis('Vertical');
   var  movement = new Vector2(movehorizontal,movevertical);
   rb.AddForce(movement * speed *  Time.deltaTime);

   Debug.Log("Fixed Update Started");

    

    
}

function LateUpdate(){
    
}

function Update(){
    
}

function OnCollisionEnter2D(other : Collision2D) {
    
    Debug.Log("Collsion Object"+other.gameObject.tag);
    
}

function OnTriggerEnter2D(other : Collider2D){
        Debug.Log("Collider Tag:"+other.gameObject.tag);
        if(other.gameObject.CompareTag("Point")){
            other.gameObject.SetActive(false);
            UpdateScore();
        }
    
}

function UpdateScore (){
    
    count = count + 1;
    scoretext.text = "Score is "+count;
    if(count > 4){
        winText.text ="You Win";
    }
    
}

