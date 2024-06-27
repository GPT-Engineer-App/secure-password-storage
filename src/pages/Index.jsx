import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleAddAccount = () => {
    if (account && password) {
      setAccounts([...accounts, { account, password }]);
      setAccount("");
      setPassword("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Account Password Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleAddAccount}>Add Account</Button>
          </div>
        </CardContent>
      </Card>
      <div className="w-full max-w-md space-y-2">
        {accounts.map((acc, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex justify-between">
                <span>{acc.account}</span>
                <span>{acc.password}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;