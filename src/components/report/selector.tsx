import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ReportSelector(props: {
  defaultValue?: string;
  onValueChange?: (value: string) => any;
}) {
  return (
    <Select
      {...{
        defaultValue: props.defaultValue,
        onValueChange: props.onValueChange,
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="타입을 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="malicious_user">불건전 언행</SelectItem>
          <SelectItem value="abuse">핵, 버그 악용</SelectItem>
          <SelectItem value="copyright">지식재산권 침해</SelectItem>
          <SelectItem value="crime">사기 및 범죄</SelectItem>
          <SelectItem value="bugbounty">버그 제보</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
