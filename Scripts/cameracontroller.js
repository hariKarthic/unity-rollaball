#pragma strict

public var offset : Vector3;
public var player: GameObject;

function Start () {
    
    
    offset = transform.position - player.transform.position;

}

function LateUpdate () {
    
    transform.position = offset + player.transform.position;

}