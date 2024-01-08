import { ReactNode } from "react";

interface MyComponentProps {
    children: ReactNode;
  }

const LayoutLearnEnglish: React.FC<MyComponentProps> = ({children})=>{
    return(
        <div className="wrapper h-[1059px] 2xl:w-[1440px] xl:w-[1240px] lg:w-[1000] md:w-[761px] sm:w-[540px] ssm:w-[380px]">
{children}
        </div>
    )
}
export default LayoutLearnEnglish