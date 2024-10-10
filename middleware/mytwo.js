export default defineNuxtRouteMiddleware((to,from)=>{
    if(to.path === "/about") {
        console.log("456");
        return navigateTo("/login");
    }
})
