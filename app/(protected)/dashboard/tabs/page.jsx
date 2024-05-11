import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TmpRezepte from "@/components/TmpRezepte"
import TmpBauen from "@/components/TmpBauen"
import TmpSägen from "@/components/TmpSägen"

export default function TabsPage() {
  return (
    <Tabs defaultValue="rezepte">
      <TabsList className="mb-4">
        <TabsTrigger value="rezepte">Rezepte</TabsTrigger>
        <TabsTrigger value="bauen">Bauen</TabsTrigger>
        <TabsTrigger value="sägen">Sägen</TabsTrigger>
      </TabsList>
      <TabsContent value="rezepte">
        <TmpRezepte />
      </TabsContent>
      <TabsContent value="bauen">
        <TmpBauen />
      </TabsContent>
      <TabsContent value="sägen">
        <TmpSägen />
      </TabsContent>
    </Tabs>
  )
}
