import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages";

export default function Error404() {
  return (
    <div className="App">
      <div className="flex min-h-screen place-items-center justify-center bg-[url('https://source.unsplash.com/random?nature')] bg-cover bg-center bg-no-repeat">
        <Card className="mx-auto max-w-xs rounded bg-background/90 py-4 text-center shadow-md dark:bg-background/85">
          <CardHeader>
            <h1 className="text-5xl font-bold text-foreground">Error 404</h1>
            <p className="mb-6 text-2xl font-medium text-foreground">
              {m.Sorry_Page_not_found()}
            </p>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">
              {m.Page_not_found_Text()}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link className="z-10 mx-auto opacity-100" href="/">
              <Button className="" size={"lg"}>
                {m.Go_Back_Home()}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}