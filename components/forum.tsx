import Link from "next/link";

type ForumParams = {
    title: string;
    description: string;
    link: string;
}
export const Forum = ({title, link, description}: ForumParams) =>{
    return (
        <a href={`https://www.mediavida.com${link}`} target="blank" rel="noopener noreferrer">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <div className="sm:w-7/12 p-5">
                <div className="space-y-2">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-cyan-900">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    
                </div>
                </div>
            </div>
        </a>
    )
} 
