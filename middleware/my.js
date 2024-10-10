export default defineNuxtRouteMiddleware((to, from)=>{
    if(to.path === "/about"){
        console.log("123");
        return true;
    }
})
