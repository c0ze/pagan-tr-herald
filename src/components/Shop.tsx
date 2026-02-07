import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export const Shop = () => {
    return (
        <section id="shop" className="py-20 bg-background relative border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-glow">
                        MERCHANDISE
                    </h2>
                    <p className="text-muted-foreground mb-12 text-lg">
                        Purchase our physical artifacts directly from the void.
                    </p>

                    <Card className="bg-card border-primary/20 max-w-2xl mx-auto overflow-hidden group hover:border-primary/50 transition-all duration-300">
                        <CardHeader className="bg-muted/10 border-b border-border pb-4">
                            <CardTitle className="flex items-center justify-center gap-3 font-mono text-xl text-primary">
                                <Terminal className="w-6 h-6" />
                                <span>SSH Shop</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <p className="text-muted-foreground mb-6">
                                Connect to our terminal-based shop to browse and purchase available CDs and merchandise.
                            </p>

                            <div className="bg-black rounded-lg p-6 border border-primary/20 relative group-hover:border-primary/30 transition-colors">
                                <code className="font-mono text-xl text-green-500 break-all sm:break-normal">
                                    ssh -p 2222 shop.pagan.tr
                                </code>
                            </div>

                            <p className="mt-4 text-xs text-muted-foreground">
                                * Requires an SSH client. Keys not stored.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
