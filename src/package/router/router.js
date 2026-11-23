import { initEvents } from "../events/index.js"

let initialRoutData = []




export const getPathName = () => {
    let pathName = window.location.hash
    pathName = pathName.slice(1 , pathName.length)
    return pathName
}





export const createBrowserRouter = (routData) => {

    initialRoutData = routData
    rebuildWebPages()
    initEvents()
    // console.log(initialRoutData)

}



export const rebuildWebPages = () => {
    // const pathName = "/" 
    let pathName = getPathName()
    // console.log(newPathName)

    const rootElement2 = document.getElementById("root2")

    console.log(rootElement2)

    rootElement2.innerHTML = ""

    initialRoutData.forEach((rout) => {
        // console.log(rout)

        if(rout.path == pathName ){
            console.log(rout)


            rootElement2.innerHTML = rout.element()
        } 

    })
}





export const useNavigation = () => {
    const navigation = (routName) => {
        window.location.hash = `#${routName}`
        rebuildWebPages()
    }

    return navigation
}