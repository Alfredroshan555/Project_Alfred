import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  description: string;
  title: string;
};

export const Modal = ({ show, onClose, description, title }: ModalProps) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogTrigger></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};
