import sublime_plugin

class EjsWrapCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        runEjsWrap(self, edit, "<% ", " %>")

class EjsWrapEvalCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        runEjsWrap(self, edit, "<%= ", " %>")

class EjsWrapInclCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        runEjsWrap(self, edit, "<%- include('", "', {}) %>")

def runEjsWrap(cmd, edit, left, right):
    view = cmd.view
    selects = view.sel()
    for select in selects:
        begin = select.begin()
        end = select.end()
    
        view.insert(edit, begin, left)
        view.insert(edit, end+len(left), right)
        if begin == end:
            for i in range(len(right)):
                view.run_command("move", {"by":"characters", "forward":False})
