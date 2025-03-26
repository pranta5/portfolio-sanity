import { MdCastForEducation } from "react-icons/md";

const education = {
    name:"education",
    title:"Education",
    type:"document",
    icon:MdCastForEducation,
    fields:[
        {
            name:"name",
            title:"Instution name",
            type:"string",
            description:"What is the name of the Instution",
        },
        {
            name:"educationTitle",
            title:"Education Title",
            type:"string",
            description:"Enter the title",
        },
        {
            name:"logo",
            title:"Instution Logo",
            type:"image",

        },
        {
            name: "description",
            title: "Education Description",
            type: "text",
            rows: 3,
            description: "Write a brief description",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
            options:{
                dateFormat:'YYYY-MM'
            },
          },
          {
            name: "endDate",
            title: "End Date",
            type: "date",
            options:{
                dateFormat:'YYYY-MM'
            },
          },
    ]

}
export default education;