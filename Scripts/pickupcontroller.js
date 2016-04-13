#pragma strict

function Start(){



}


function FixedUpdate(){

}

function Update(){

    transform.Rotate(new Vector3(0,0,45) * Time.deltaTime);

}