<template>
  <div id="app">
    <link rel='stylesheet' id='google-fonts-1-css'  href='https://fonts.googleapis.com/css?family=Montserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;ver=5.5.3' type='text/css' media='all' />
    <div id="nav">
      <router-link :to="{ name: 'home' }">
        <img class= "logo" alt="Youtune" src="@/assets/Youtune.png" width='35px'>
      </router-link>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">  About </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl(0, 0%, 100%);
  padding: calc((100vh - 957px) / 2 + 75px) 130px calc((100vh - 957px) / 2 - 75px);
}
#nav {
  padding-bottom: 110px;
  text-align: right;
  a {
    font-weight: bold;
    color: #686767;
    text-decoration: none;
    word-spacing: 80px;
    font-size: 26px;
    &.router-link-exact-active {
      color: #18181A;
      text-decoration: none;
    }
  }
}
input[type=text], select {
  width: 100%;
  padding: 24px 20px;
  display: inline-block;
  border-radius: 80px;
  font-weight: 900;
  font-size: 1.2rem;
  border: 4px solid #A397EF;
}

input[type=text]{
  width: 100%;
  padding: 24px 20px;
  display: inline-block;
  border-radius: 80px;
  font-weight: 900;
  font-size: 1.2rem;
  border: 4px solid #A397EF;
  outline: none;
}

.container{
  display:flex;
  align-items: center
}
.logo{
	position:fixed;
	left:100px;
  max-width: 20%;
}
.landingImage{
  width: 75%;
  float: right;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

h1{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 5.0rem;
  color: #18181A;
}
h2{
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color: #6E67A9;
}
h3{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 5.0rem;
  color:#18181A;
}
h4{
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
}
h5{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  line-height: 12;
  font-size: 1rem;
  color: #FFFFFF;
}
</style>
