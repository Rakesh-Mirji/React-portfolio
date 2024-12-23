import { audioSrc } from "@/public/data/projectData"
import AudioPlayer from "@/app/components/audioPlayer"

export default function AudioComponent(){
    return(
    <div className="w-[60vw] ml-[20vw]">
        <AudioPlayer src={audioSrc}/>
    </div>
    )
}