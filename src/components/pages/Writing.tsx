import Button from "../component/Button";
import Notification from "../component/Notifi";
import EssayTitle from "../component/EssayTitle";
import TextArea from "../component/TextArea";
import LayoutLearnEnglish from "../layouts/LayoutLearnEnglish";

const Writing = ()=>{

    return (
        <LayoutLearnEnglish>
    <div className="mx-auto mt-12 mb-2 2xl:w-[932px] xl:w-[840px] lg:w-[632px] md:w-[568px] sm:w[440px] ssm:w-[375px] h-[888px] flex flex-col px-8 gap-[17.74px] border-solid border-gray-500-1 border-[1px]">
    <div className="flex justify-center gap-5">
        <Button>Writing Topic</Button>
        <Button height="h-[54.206px]" width="w-[419.249px]" textColor="text-text_gray-100" bgColor="bg-white" border="border-solid border-gray-500-1 border-[1px]">From Your Essay</Button>
    </div>
    <EssayTitle/>
    <TextArea/>
    <Button width="2xl:w-[873.601px] xl:w-[773.601px] lg:w-[566px] md:w-[502px] sm:w-[310px] ssm:w-[315px]" height="h-[54.206px]">Generate Quizz</Button>
    <Notification/>
  </div>
  </LayoutLearnEnglish>
    )
}
export default Writing