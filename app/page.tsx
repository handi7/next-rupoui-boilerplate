"use client";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Chip,
  DatePicker,
  Input,
  Pagination,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Spinner,
  Switch,
  Tab,
  Tabs,
  Textarea,
  Tooltip,
  toast,
  Toaster,
} from "rupoui";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className="min-h-screen bg-background p-8 font-sans text-foreground">
      <Toaster />
      <main className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
            Next.js + RupoUI
          </h1>
          <p className="text-muted-foreground text-lg">
            A boilerplate with Next.js 15, Tailwind CSS v4, and RupoUI components.
          </p>
          <div className="flex justify-center gap-4">
            <Button as="a" href="https://rupoui.com" color="primary" variant="solid">
              Documentation
            </Button>
            <Button as="a" href="https://github.com/rupoui/rupoui" variant="bordered">
              GitHub
            </Button>
          </div>
        </header>

        <section className="space-y-6 rounded-xl border border-divider bg-content1 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Inputs & Controls</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <Input label="Email" placeholder="Enter your email" />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                description="We'll never share your password."
              />
              <Textarea label="Bio" placeholder="Tell us about yourself" rows={3} />
              <Select label="Favorite Framework">
                <SelectItem key="next">Next.js</SelectItem>
                <SelectItem key="react">React</SelectItem>
                <SelectItem key="vue">Vue</SelectItem>
              </Select>
              <DatePicker value={date} onChange={setDate} placeholder="Birth Date" />
            </div>
            <div className="space-y-6">
              <CheckboxGroup label="Interests" color="primary">
                <Checkbox value="coding">Coding</Checkbox>
                <Checkbox value="design">Design</Checkbox>
                <Checkbox value="gaming">Gaming</Checkbox>
              </CheckboxGroup>

              <RadioGroup label="Experience Level" defaultValue="junior" color="primary">
                <Radio value="junior">Junior</Radio>
                <Radio value="mid">Mid-Senior</Radio>
                <Radio value="senior">Senior</Radio>
              </RadioGroup>

              <div className="flex items-center gap-4">
                <Switch defaultSelected>Notifications</Switch>
                <Switch defaultSelected color="success">
                  Auto-save
                </Switch>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-xl border border-divider bg-content1 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Interactive & Feedback</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button color="primary" onClick={() => toast.success("Action successful!")}>
              Trigger Success Toast
            </Button>
            <Button
              color="danger"
              variant="flat"
              onClick={() => toast.error("Something went wrong")}
            >
              Trigger Error Toast
            </Button>

            <Tooltip content="I am a tooltip">
              <Button variant="bordered">Hover me</Button>
            </Tooltip>

            <Popover>
              <PopoverTrigger>
                <Button variant="ghost">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-4 py-2">
                  <h3 className="font-bold">Popover Content</h3>
                  <p className="text-sm">This is a customizable popover.</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex gap-4 items-center">
            <Spinner size="lg" color="primary" />
            <Spinner size="lg" color="secondary" />
            <Spinner size="lg" color="success" />
            <Spinner size="lg" color="warning" />
            <Spinner size="lg" color="danger" />
          </div>

          <div className="flex gap-2">
            <Chip color="primary">Primary</Chip>
            <Chip color="secondary" variant="flat">
              Secondary
            </Chip>
            <Chip color="success" variant="bordered">
              Success
            </Chip>
            <Chip color="warning" variant="light">
              Warning
            </Chip>
            <Chip isCloseable color="danger">
              Closeable
            </Chip>
          </div>
        </section>

        <section className="space-y-6 rounded-xl border border-divider bg-content1 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Navigation</h2>

          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <div className="p-4 rounded-lg bg-content2 border border-divider">
                Photos Tab Content
              </div>
            </Tab>
            <Tab key="music" title="Music">
              <div className="p-4 rounded-lg bg-content2 border border-divider">
                Music Tab Content
              </div>
            </Tab>
            <Tab key="videos" title="Videos">
              <div className="p-4 rounded-lg bg-content2 border border-divider">
                Videos Tab Content
              </div>
            </Tab>
          </Tabs>

          <Pagination page={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </section>
      </main>
    </div>
  );
}
