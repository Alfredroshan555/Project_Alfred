"use client";

// import { usePersisitedState } from "@/hooks/usePersistedState";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { RenderContent } from "@/components/RenderContent";

const desc =
  "Description lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae. Lorem ipsum dolor sit amet con sect etetur adipisicing elit. Lorem ipsum dolor";

const Dashboard = () => {
  // const [num, setNum] = usePersisitedState("num", 0);
  const [show, setShow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        {/* <div>{num}</div>
        <Button onClick={() => setNum(num + 1)}>Set</Button> <br /> */}
        ------------------------------------------------------------------------------------------------
        <div>Modal</div>
        <Button onClick={() => setShow(true)}>Show Content</Button>
        <RenderContent isVisible={show}>Content</RenderContent>
        <br />
        ------------------------------------------------------------------------------------------------
        <div>Pop up</div>
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>

      {/* Modals */}
      <Modal
        show={open}
        onClose={() => setOpen(false)}
        description={desc}
        title="Title"
      />
    </>
  );
};
export default Dashboard;
