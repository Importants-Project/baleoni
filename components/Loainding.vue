<template>
  <div class="loainding">
    <div class="loainding__box">
    <img src="../assets/image/logo.svg" alt="logoLoad">
<div class="c-loader"></div>
    </div>
  </div>
</template>

<style >
.loainding {
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FF6701;
  width: 100vw;
  height: 100vh;
  
}

.loainding__box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  animation: pulse-black 2s infinite;
  display: flex;
  align-items: center;
  flex-direction: column;

}

.loainding__box img{
 width: 175px;
 height: 70px;
}


.c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #fff;
  border-radius: 50%;
  border-top-color: #FF6701;
  height: 50px;
  width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}



</style>