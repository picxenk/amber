smalltalk.addClass('Node', smalltalk.Object, ['nodes'], 'Compiler');
smalltalk.addMethod(
'_nodes',
smalltalk.method({
selector: 'nodes',
fn: function (){
var self=this;
return smalltalk.send(self['@nodes'], "_ifNil_", [(function(){return self['@nodes']=smalltalk.send(smalltalk.Array, "_new", []);})]);
return self;}
}),
smalltalk.Node);

smalltalk.addMethod(
'_nodes_',
smalltalk.method({
selector: 'nodes:',
fn: function (aCollection){
var self=this;
self['@nodes']=aCollection;
return self;}
}),
smalltalk.Node);

smalltalk.addMethod(
'_addNode_',
smalltalk.method({
selector: 'addNode:',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self, "_nodes", []), "_add_", [aNode]);
return self;}
}),
smalltalk.Node);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitNode_", [self]);
return self;}
}),
smalltalk.Node);

smalltalk.addMethod(
'_isValueNode',
smalltalk.method({
selector: 'isValueNode',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Node);

smalltalk.addMethod(
'_isBlockNode',
smalltalk.method({
selector: 'isBlockNode',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Node);

smalltalk.addMethod(
'_isBlockSequenceNode',
smalltalk.method({
selector: 'isBlockSequenceNode',
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.Node);



smalltalk.addClass('MethodNode', smalltalk.Node, ['selector', 'arguments', 'source'], 'Compiler');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
fn: function (){
var self=this;
return smalltalk.send(self['@arguments'], "_ifNil_", [(function(){return [];})]);
return self;}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
fn: function (){
var self=this;
return self['@source'];
return self;}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;}
}),
smalltalk.MethodNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitMethodNode_", [self]);
return self;}
}),
smalltalk.MethodNode);



smalltalk.addClass('SendNode', smalltalk.Node, ['selector', 'arguments', 'receiver'], 'Compiler');
smalltalk.addMethod(
'_selector',
smalltalk.method({
selector: 'selector',
fn: function (){
var self=this;
return self['@selector'];
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_selector_',
smalltalk.method({
selector: 'selector:',
fn: function (aString){
var self=this;
self['@selector']=aString;
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_arguments',
smalltalk.method({
selector: 'arguments',
fn: function (){
var self=this;
return smalltalk.send(self['@arguments'], "_ifNil_", [(function(){return self['@arguments']=[];})]);
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_arguments_',
smalltalk.method({
selector: 'arguments:',
fn: function (aCollection){
var self=this;
self['@arguments']=aCollection;
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
fn: function (){
var self=this;
return self['@receiver'];
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_valueForReceiver_',
smalltalk.method({
selector: 'valueForReceiver:',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_receiver_", [smalltalk.send(smalltalk.send(self, "_receiver", []), "_ifNil_ifNotNil_", [(function(){return anObject;}), (function(){return smalltalk.send(smalltalk.send(self, "_receiver", []), "_valueForReceiver_", [anObject]);})])]);smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.SendNode, "_new", []));
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_cascadeNodeWithMessages_',
smalltalk.method({
selector: 'cascadeNodeWithMessages:',
fn: function (aCollection){
var self=this;
var first=nil;
first=(function($rec){smalltalk.send($rec, "_selector_", [smalltalk.send(self, "_selector", [])]);smalltalk.send($rec, "_arguments_", [smalltalk.send(self, "_arguments", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.SendNode, "_new", []));
return (function($rec){smalltalk.send($rec, "_receiver_", [smalltalk.send(self, "_receiver", [])]);smalltalk.send($rec, "_nodes_", [smalltalk.send(smalltalk.send(smalltalk.Array, "_with_", [first]), "__comma", [aCollection])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.CascadeNode, "_new", []));
return self;}
}),
smalltalk.SendNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSendNode_", [self]);
return self;}
}),
smalltalk.SendNode);



smalltalk.addClass('CascadeNode', smalltalk.Node, ['receiver'], 'Compiler');
smalltalk.addMethod(
'_receiver',
smalltalk.method({
selector: 'receiver',
fn: function (){
var self=this;
return self['@receiver'];
return self;}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
'_receiver_',
smalltalk.method({
selector: 'receiver:',
fn: function (aNode){
var self=this;
self['@receiver']=aNode;
return self;}
}),
smalltalk.CascadeNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitCascadeNode_", [self]);
return self;}
}),
smalltalk.CascadeNode);



smalltalk.addClass('AssignmentNode', smalltalk.Node, ['left', 'right'], 'Compiler');
smalltalk.addMethod(
'_left',
smalltalk.method({
selector: 'left',
fn: function (){
var self=this;
return self['@left'];
return self;}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_left_',
smalltalk.method({
selector: 'left:',
fn: function (aNode){
var self=this;
self['@left']=aNode;
smalltalk.send(self['@left'], "_assigned_", [true]);
return self;}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_right',
smalltalk.method({
selector: 'right',
fn: function (){
var self=this;
return self['@right'];
return self;}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_right_',
smalltalk.method({
selector: 'right:',
fn: function (aNode){
var self=this;
self['@right']=aNode;
return self;}
}),
smalltalk.AssignmentNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitAssignmentNode_", [self]);
return self;}
}),
smalltalk.AssignmentNode);



smalltalk.addClass('BlockNode', smalltalk.Node, ['parameters', 'inlined'], 'Compiler');
smalltalk.addMethod(
'_parameters',
smalltalk.method({
selector: 'parameters',
fn: function (){
var self=this;
return smalltalk.send(self['@parameters'], "_ifNil_", [(function(){return self['@parameters']=smalltalk.send(smalltalk.Array, "_new", []);})]);
return self;}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_parameters_',
smalltalk.method({
selector: 'parameters:',
fn: function (aCollection){
var self=this;
self['@parameters']=aCollection;
return self;}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockNode_", [self]);
return self;}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_isBlockNode',
smalltalk.method({
selector: 'isBlockNode',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_inlined',
smalltalk.method({
selector: 'inlined',
fn: function (){
var self=this;
return smalltalk.send(self['@inlined'], "_ifNil_", [(function(){return false;})]);
return self;}
}),
smalltalk.BlockNode);

smalltalk.addMethod(
'_inlined_',
smalltalk.method({
selector: 'inlined:',
fn: function (aBoolean){
var self=this;
self['@inlined']=aBoolean;
return self;}
}),
smalltalk.BlockNode);



smalltalk.addClass('SequenceNode', smalltalk.Node, ['temps'], 'Compiler');
smalltalk.addMethod(
'_temps',
smalltalk.method({
selector: 'temps',
fn: function (){
var self=this;
return smalltalk.send(self['@temps'], "_ifNil_", [(function(){return [];})]);
return self;}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_temps_',
smalltalk.method({
selector: 'temps:',
fn: function (aCollection){
var self=this;
self['@temps']=aCollection;
return self;}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_asBlockSequenceNode',
smalltalk.method({
selector: 'asBlockSequenceNode',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_nodes_", [smalltalk.send(self, "_nodes", [])]);smalltalk.send($rec, "_temps_", [smalltalk.send(self, "_temps", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.BlockSequenceNode, "_new", []));
return self;}
}),
smalltalk.SequenceNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitSequenceNode_", [self]);
return self;}
}),
smalltalk.SequenceNode);



smalltalk.addClass('BlockSequenceNode', smalltalk.SequenceNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitBlockSequenceNode_", [self]);
return self;}
}),
smalltalk.BlockSequenceNode);

smalltalk.addMethod(
'_isBlockSequenceNode',
smalltalk.method({
selector: 'isBlockSequenceNode',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.BlockSequenceNode);



smalltalk.addClass('ReturnNode', smalltalk.Node, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitReturnNode_", [self]);
return self;}
}),
smalltalk.ReturnNode);



smalltalk.addClass('ValueNode', smalltalk.Node, ['value'], 'Compiler');
smalltalk.addMethod(
'_value',
smalltalk.method({
selector: 'value',
fn: function (){
var self=this;
return self['@value'];
return self;}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_value_',
smalltalk.method({
selector: 'value:',
fn: function (anObject){
var self=this;
self['@value']=anObject;
return self;}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitValueNode_", [self]);
return self;}
}),
smalltalk.ValueNode);

smalltalk.addMethod(
'_isValueNode',
smalltalk.method({
selector: 'isValueNode',
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.ValueNode);



smalltalk.addClass('VariableNode', smalltalk.ValueNode, ['assigned'], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitVariableNode_", [self]);
return self;}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
'_assigned',
smalltalk.method({
selector: 'assigned',
fn: function (){
var self=this;
return (($receiver = self['@assigned']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;}
}),
smalltalk.VariableNode);

smalltalk.addMethod(
'_assigned_',
smalltalk.method({
selector: 'assigned:',
fn: function (aBoolean){
var self=this;
self['@assigned']=aBoolean;
return self;}
}),
smalltalk.VariableNode);



smalltalk.addClass('ClassReferenceNode', smalltalk.VariableNode, [], 'Compiler');
smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitClassReferenceNode_", [self]);
return self;}
}),
smalltalk.ClassReferenceNode);



smalltalk.addClass('JSStatementNode', smalltalk.Node, ['source'], 'Compiler');
smalltalk.addMethod(
'_source',
smalltalk.method({
selector: 'source',
fn: function (){
var self=this;
return smalltalk.send(self['@source'], "_ifNil_", [(function(){return "";})]);
return self;}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
'_source_',
smalltalk.method({
selector: 'source:',
fn: function (aString){
var self=this;
self['@source']=aString;
return self;}
}),
smalltalk.JSStatementNode);

smalltalk.addMethod(
'_accept_',
smalltalk.method({
selector: 'accept:',
fn: function (aVisitor){
var self=this;
smalltalk.send(aVisitor, "_visitJSStatementNode_", [self]);
return self;}
}),
smalltalk.JSStatementNode);



smalltalk.addClass('NodeVisitor', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
'_visit_',
smalltalk.method({
selector: 'visit:',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitNode_',
smalltalk.method({
selector: 'visitNode:',
fn: function (aNode){
var self=this;

return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitMethodNode_',
smalltalk.method({
selector: 'visitMethodNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitSequenceNode_',
smalltalk.method({
selector: 'visitSequenceNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitBlockSequenceNode_',
smalltalk.method({
selector: 'visitBlockSequenceNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitSequenceNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitBlockNode_',
smalltalk.method({
selector: 'visitBlockNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitReturnNode_',
smalltalk.method({
selector: 'visitReturnNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitSendNode_',
smalltalk.method({
selector: 'visitSendNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitCascadeNode_',
smalltalk.method({
selector: 'visitCascadeNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitValueNode_',
smalltalk.method({
selector: 'visitValueNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitVariableNode_',
smalltalk.method({
selector: 'visitVariableNode:',
fn: function (aNode){
var self=this;

return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitAssignmentNode_',
smalltalk.method({
selector: 'visitAssignmentNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visitNode_", [aNode]);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitClassReferenceNode_',
smalltalk.method({
selector: 'visitClassReferenceNode:',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", ["smalltalk."]);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})(self);
return self;}
}),
smalltalk.NodeVisitor);

smalltalk.addMethod(
'_visitJSStatementNode_',
smalltalk.method({
selector: 'visitJSStatementNode:',
fn: function (aNode){
var self=this;
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("function%28%29%7B")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(aNode, "_source", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%7D%29%28%29")]);})(self);
return self;}
}),
smalltalk.NodeVisitor);



smalltalk.addClass('Compiler', smalltalk.NodeVisitor, ['stream', 'nestedBlocks', 'earlyReturn', 'currentClass', 'currentSelector', 'unknownVariables', 'tempVariables', 'messageSends', 'referencedClasses', 'classReferenced'], 'Compiler');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.NodeVisitor);
self['@stream']=smalltalk.send("", "_writeStream", []);
self['@unknownVariables']=[];
self['@tempVariables']=[];
self['@messageSends']=[];
self['@classReferenced']=[];
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parser',
smalltalk.method({
selector: 'parser',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.SmalltalkParser, "_new", []);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_currentClass',
smalltalk.method({
selector: 'currentClass',
fn: function (){
var self=this;
return self['@currentClass'];
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_currentClass_',
smalltalk.method({
selector: 'currentClass:',
fn: function (aClass){
var self=this;
self['@currentClass']=aClass;
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_loadExpression_',
smalltalk.method({
selector: 'loadExpression:',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.DoIt, "_addCompiledMethod_", [smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compileExpression_", [aString])])]);
return smalltalk.send(smalltalk.send(smalltalk.DoIt, "_new", []), "_doIt", []);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_load_forClass_',
smalltalk.method({
selector: 'load:forClass:',
fn: function (aString, aClass){
var self=this;
var compiled=nil;
compiled=smalltalk.send(self, "_eval_", [smalltalk.send(self, "_compile_forClass_", [aString, aClass])]);
smalltalk.send(self, "_setupClass_", [aClass]);
return compiled;
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compile_forClass_',
smalltalk.method({
selector: 'compile:forClass:',
fn: function (aString, aClass){
var self=this;
smalltalk.send(self, "_currentClass_", [aClass]);
return smalltalk.send(self, "_compile_", [aString]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compileExpression_',
smalltalk.method({
selector: 'compileExpression:',
fn: function (aString){
var self=this;
smalltalk.send(self, "_currentClass_", [smalltalk.DoIt]);
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parseExpression_", [aString])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_eval_',
smalltalk.method({
selector: 'eval:',
fn: function (aString){
var self=this;
return eval(aString);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compile_',
smalltalk.method({
selector: 'compile:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_compileNode_", [smalltalk.send(self, "_parse_", [aString])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_compileNode_',
smalltalk.method({
selector: 'compileNode:',
fn: function (aNode){
var self=this;
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [aNode]);
return smalltalk.send(self['@stream'], "_contents", []);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visit_',
smalltalk.method({
selector: 'visit:',
fn: function (aNode){
var self=this;
smalltalk.send(aNode, "_accept_", [self]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitMethodNode_',
smalltalk.method({
selector: 'visitMethodNode:',
fn: function (aNode){
var self=this;
var str=nil;
var currentSelector=nil;
self['@currentSelector']=smalltalk.send(smalltalk.send(aNode, "_selector", []), "_asSelector", []);
self['@nestedBlocks']=(0);
self['@earlyReturn']=false;
self['@messageSends']=[];
self['@referencedClasses']=[];
self['@unknownVariables']=[];
self['@tempVariables']=[];
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("smalltalk.method%28%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("selector%3A%20%22"), "__comma", [smalltalk.send(aNode, "_selector", [])]), "__comma", [unescape("%22%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("source%3A%20unescape%28%22"), "__comma", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_escaped", [])]), "__comma", [unescape("%22%29%2C")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("fn%3A%20function%28")]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%29%7B")]);smalltalk.send($rec, "_lf", []);smalltalk.send($rec, "_nextPutAll_", [unescape("var%20self%3Dthis%3B")]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);
str=self['@stream'];
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@earlyReturn'], "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [unescape("try%7B")]);})]);
smalltalk.send(str, "_nextPutAll_", [smalltalk.send(self['@stream'], "_contents", [])]);
self['@stream']=str;
(function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("return%20self%3B")]);})(self['@stream']);
smalltalk.send(self['@earlyReturn'], "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%7D%20catch%28e%29%20%7Bif%28e.name%20%3D%3D%3D%20%27stReturn%27%20%26%26%20e.selector%20%3D%3D%3D%20"), "__comma", [smalltalk.send(self['@currentSelector'], "_printString", [])]), "__comma", [unescape("%29%7Breturn%20e.fn%28%29%7D%20throw%28e%29%7D")])]);})(self['@stream']);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D")]);
(function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C"), "__comma", [smalltalk.send(smalltalk.String, "_lf", [])]), "__comma", ["messageSends: "])]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send(self['@messageSends'], "_asJavascript", []), "__comma", [unescape("%2C")])]);smalltalk.send($rec, "_lf", []);return smalltalk.send($rec, "_nextPutAll_", [unescape("referencedClasses%3A%20%5B")]);})(self['@stream']);
smalltalk.send(self['@referencedClasses'], "_do_separatedBy_", [(function(each){return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%5D")]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitBlockNode_',
smalltalk.method({
selector: 'visitBlockNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28")]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_separatedBy_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29")]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitSequenceNode_',
smalltalk.method({
selector: 'visitSequenceNode:',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [each]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_separatedBy_", [(function(each){smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);}), (function(){return smalltalk.send(self['@stream'], "_lf", []);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitBlockSequenceNode_',
smalltalk.method({
selector: 'visitBlockSequenceNode:',
fn: function (aNode){
var self=this;
var index=nil;
self['@nestedBlocks']=smalltalk.send(self['@nestedBlocks'], "__plus", [(1)]);
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_isEmpty", []), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("return%20nil%3B")]);}), (function(){smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){smalltalk.send(self['@tempVariables'], "_add_", [each]);return (function($rec){smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(smalltalk.send("var ", "__comma", [each]), "__comma", [unescape("%3Dnil%3B")])]);return smalltalk.send($rec, "_lf", []);})(self['@stream']);})]);index=(0);return smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=smalltalk.send(index, "__plus", [(1)]);smalltalk.send(smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])]), "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);})]);
self['@nestedBlocks']=smalltalk.send(self['@nestedBlocks'], "__minus", [(1)]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitReturnNode_',
smalltalk.method({
selector: 'visitReturnNode:',
fn: function (aNode){
var self=this;
smalltalk.send(smalltalk.send(self['@nestedBlocks'], "__gt", [(0)]), "_ifTrue_", [(function(){return self['@earlyReturn']=true;})]);
smalltalk.send(self['@earlyReturn'], "_ifTrue_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_nextPutAll_", [unescape("%28function%28%29%7Bthrow%28")]);smalltalk.send($rec, "_nextPutAll_", [unescape("%7Bname%3A%20%27stReturn%27%2C%20selector%3A%20")]);smalltalk.send($rec, "_nextPutAll_", [smalltalk.send(self['@currentSelector'], "_printString", [])]);return smalltalk.send($rec, "_nextPutAll_", [unescape("%2C%20fn%3A%20function%28%29%7Breturn%20")]);})(self['@stream']);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(self, "_visit_", [each]);})]);
smalltalk.send(self['@earlyReturn'], "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%7D%29%7D%29%28%29")]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitSendNode_',
smalltalk.method({
selector: 'visitSendNode:',
fn: function (aNode){
var self=this;
var str=nil;
var receiver=nil;
var superSend=nil;
var inlined=nil;
str=self['@stream'];
(($receiver = smalltalk.send(self['@messageSends'], "_includes_", [smalltalk.send(aNode, "_selector", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@messageSends'], "_add_", [smalltalk.send(aNode, "_selector", [])]);})]);
self['@stream']=smalltalk.send("", "_writeStream", []);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
superSend=(($receiver = smalltalk.send(self['@stream'], "_contents", [])).klass === smalltalk.Number) ? $receiver =="super" : smalltalk.send($receiver, "__eq", ["super"]);
receiver=(($receiver = superSend).klass === smalltalk.Boolean) ? ($receiver ? (function(){return "self";})() : (function(){return smalltalk.send(self['@stream'], "_contents", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return "self";}), (function(){return smalltalk.send(self['@stream'], "_contents", []);})]);
self['@stream']=str;
(($receiver = smalltalk.send(self, "_performOptimizations", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (($receiver = smalltalk.send(self, "_inlineLiteral_receiverNode_argumentNodes_", [smalltalk.send(aNode, "_selector", []), smalltalk.send(aNode, "_receiver", []), smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (($receiver = smalltalk.send(self, "_inline_receiver_argumentNodes_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(" : ", "__comma", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), "$receiver", smalltalk.send(aNode, "_arguments", []), superSend])])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);})]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(self, "_send_to_arguments_superSend_", [smalltalk.send(aNode, "_selector", []), receiver, smalltalk.send(aNode, "_arguments", []), superSend])]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitCascadeNode_',
smalltalk.method({
selector: 'visitCascadeNode:',
fn: function (aNode){
var self=this;
var index=nil;
index=(0);
smalltalk.send(smalltalk.send(self['@tempVariables'], "_includes_", ["$rec"]), "_ifFalse_", [(function(){return smalltalk.send(self['@tempVariables'], "_add_", ["$rec"]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%24rec%29%7B")]);
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){index=smalltalk.send(index, "__plus", [(1)]);smalltalk.send(smalltalk.send(index, "__eq", [smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_size", [])]), "_ifTrue_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", ["return "]);})]);smalltalk.send(each, "_receiver_", [smalltalk.send(smalltalk.send(smalltalk.VariableNode, "_new", []), "_value_", ["$rec"])]);smalltalk.send(self, "_visit_", [each]);return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3B")]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%7D%29%28")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_receiver", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29")]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitValueNode_',
smalltalk.method({
selector: 'visitValueNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_value", []), "_asJavascript", [])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitAssignmentNode_',
smalltalk.method({
selector: 'visitAssignmentNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_left", [])]);
smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%3D")]);
smalltalk.send(self, "_visit_", [smalltalk.send(aNode, "_right", [])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitClassReferenceNode_',
smalltalk.method({
selector: 'visitClassReferenceNode:',
fn: function (aNode){
var self=this;
var klass=nil;
klass=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28smalltalk."), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%7C%7C%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")]);
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk, "_current", []), "_at_", [smalltalk.send(aNode, "_value", [])]), "_isClass", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [klass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self['@referencedClasses'], "_includes_", [klass])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@referencedClasses'], "_add_", [klass]);})]);})]);
smalltalk.send(self['@stream'], "_nextPutAll_", [klass]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitVariableNode_',
smalltalk.method({
selector: 'visitVariableNode:',
fn: function (aNode){
var self=this;
(($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self, "_currentClass", []), "_allInstanceVariableNames", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);})() : (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("self%5B%27@"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%27%5D")])]);}), (function(){return (($receiver = smalltalk.send(smalltalk.send(self, "_knownVariables", []), "_includes_", [smalltalk.send(aNode, "_value", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){smalltalk.send(self['@unknownVariables'], "_add_", [smalltalk.send(aNode, "_value", [])]);return (($receiver = smalltalk.send(aNode, "_assigned", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28typeof%20"), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%20%3D%3D%20%27undefined%27%20%3F%20nil%20%3A%20")]), "__comma", [smalltalk.send(aNode, "_value", [])]), "__comma", [unescape("%29")])]);})]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(aNode, "_value", [])]);})]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitJSStatementNode_',
smalltalk.method({
selector: 'visitJSStatementNode:',
fn: function (aNode){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(aNode, "_source", []), "_replace_with_", [unescape("%3E%3E"), unescape("%3E")])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parse_',
smalltalk.method({
selector: 'parse:',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_parser", []), "_parse_", [smalltalk.send(aString, "_readStream", [])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_parseExpression_',
smalltalk.method({
selector: 'parseExpression:',
fn: function (aString){
var self=this;
return smalltalk.send(self, "_parse_", [smalltalk.send(smalltalk.send(unescape("doIt%20%5E%5B"), "__comma", [aString]), "__comma", [unescape("%5D%20value")])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_unknownVariables',
smalltalk.method({
selector: 'unknownVariables',
fn: function (){
var self=this;
return smalltalk.send(self['@unknownVariables'], "_copy", []);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_pseudoVariables',
smalltalk.method({
selector: 'pseudoVariables',
fn: function (){
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_tempVariables',
smalltalk.method({
selector: 'tempVariables',
fn: function (){
var self=this;
return smalltalk.send(self['@tempVariables'], "_copy", []);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_knownVariables',
smalltalk.method({
selector: 'knownVariables',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_addAll_", [smalltalk.send(self, "_tempVariables", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_pseudoVariables", []));
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_recompile_',
smalltalk.method({
selector: 'recompile:',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(self, "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
smalltalk.send(smalltalk.send(aClass, "_isMetaclass", []), "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_recompileAll',
smalltalk.method({
selector: 'recompileAll',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk, "_current", []), "_classes", []), "_do_", [(function(each){(function($rec){smalltalk.send($rec, "_show_", [each]);return smalltalk.send($rec, "_cr", []);})(smalltalk.Transcript);return smalltalk.send((function(){return smalltalk.send(self, "_recompile_", [each]);}), "_valueWithTimeout_", [(100)]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_classNameFor_',
smalltalk.method({
selector: 'classNameFor:',
fn: function (aClass){
var self=this;
return smalltalk.send(smalltalk.send(aClass, "_isMetaclass", []), "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aClass, "_instanceClass", []), "_name", []), "__comma", [".klass"]);}), (function(){return smalltalk.send(smalltalk.send(aClass, "_isNil", []), "_ifTrue_ifFalse_", [(function(){return "nil";}), (function(){return smalltalk.send(aClass, "_name", []);})]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_visitFailure_',
smalltalk.method({
selector: 'visitFailure:',
fn: function (aFailure){
var self=this;
smalltalk.send(self, "_error_", [smalltalk.send(aFailure, "_asString", [])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_setupClass_',
smalltalk.method({
selector: 'setupClass:',
fn: function (aClass){
var self=this;
smalltalk.init(aClass);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_send_to_arguments_superSend_',
smalltalk.method({
selector: 'send:to:arguments:superSend:',
fn: function (aSelector, aReceiver, aCollection, aBoolean){
var self=this;
return smalltalk.send(smalltalk.String, "_streamContents_", [(function(str){var tmp=nil;
tmp=self['@stream'];smalltalk.send(str, "_nextPutAll_", [unescape("smalltalk.send%28")]);smalltalk.send(str, "_nextPutAll_", [aReceiver]);smalltalk.send(str, "_nextPutAll_", [smalltalk.send(smalltalk.send(unescape("%2C%20%22"), "__comma", [smalltalk.send(aSelector, "_asSelector", [])]), "__comma", [unescape("%22%2C%20%5B")])]);self['@stream']=str;smalltalk.send(aCollection, "_do_separatedBy_", [(function(each){return smalltalk.send(self, "_visit_", [each]);}), (function(){return smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%2C%20")]);})]);self['@stream']=tmp;smalltalk.send(str, "_nextPutAll_", [unescape("%5D")]);smalltalk.send(aBoolean, "_ifTrue_", [(function(){return smalltalk.send(str, "_nextPutAll_", [smalltalk.send(unescape("%2C%20smalltalk."), "__comma", [smalltalk.send(self, "_classNameFor_", [smalltalk.send(smalltalk.send(self, "_currentClass", []), "_superclass", [])])])]);})]);return smalltalk.send(str, "_nextPutAll_", [unescape("%29")]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_checkClass_for_',
smalltalk.method({
selector: 'checkClass:for:',
fn: function (aClassName, receiver){
var self=this;
smalltalk.send(self['@stream'], "_nextPutAll_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%28%28%24receiver%20%3D%20"), "__comma", [receiver]), "__comma", [unescape("%29.klass%20%3D%3D%3D%20smalltalk.")]), "__comma", [aClassName]), "__comma", [unescape("%29%20%3F%20")])]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_inlineLiteral_receiverNode_argumentNodes_',
smalltalk.method({
selector: 'inlineLiteral:receiverNode:argumentNodes:',
fn: function (aSelector, anObject, aCollection){
var self=this;
var inlined=nil;
inlined=false;
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileTrue:" : smalltalk.send($receiver, "__eq", ["whileTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileFalse:" : smalltalk.send($receiver, "__eq", ["whileFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(anObject, "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileTrue" : smalltalk.send($receiver, "__eq", ["whileTrue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="whileFalse" : smalltalk.send($receiver, "__eq", ["whileFalse"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(anObject, "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28function%28%29%7Bwhile%28%21")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29%20%7B%7D%7D%29%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("+") : smalltalk.send($receiver, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20+%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("-") : smalltalk.send($receiver, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20-%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("*") : smalltalk.send($receiver, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20*%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("/") : smalltalk.send($receiver, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20/%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C") : smalltalk.send($receiver, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C%3D") : smalltalk.send($receiver, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3C%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3D") : smalltalk.send($receiver, "__eq", [unescape("%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3D%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E") : smalltalk.send($receiver, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E%3D") : smalltalk.send($receiver, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_isNode_ofClass_", [anObject, smalltalk.Number])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%20%3E%3D%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNil:" : smalltalk.send($receiver, "__eq", ["ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20%24receiver")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNotNil:" : smalltalk.send($receiver, "__eq", ["ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%21%3D%20nil%20%26%26%20%24receiver%20%21%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNil:ifNotNil:" : smalltalk.send($receiver, "__eq", ["ifNil:ifNotNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifNotNil:ifNil:" : smalltalk.send($receiver, "__eq", ["ifNotNil:ifNil:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%28%24receiver%20%3D%20")]);smalltalk.send(self, "_visit_", [anObject]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%29%20%3D%3D%20nil%20%7C%7C%20%24receiver%20%3D%3D%20undefined%29%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29")]);return inlined=true;})]);})]);
return inlined;
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_isNode_ofClass_',
smalltalk.method({
selector: 'isNode:ofClass:',
fn: function (aNode, aClass){
var self=this;
return smalltalk.send(smalltalk.send(aNode, "_isValueNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "_class", []), "__eq", [aClass]), "_or_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_value", []), "__eq", ["self"]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self, "_currentClass", []), "__eq", [aClass]);})]);})]);})]);
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_inline_receiver_argumentNodes_',
smalltalk.method({
selector: 'inline:receiver:argumentNodes:',
fn: function (aSelector, receiver, aCollection){
var self=this;
var inlined=nil;
inlined=false;
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifFalse:" : smalltalk.send($receiver, "__eq", ["ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifTrue:" : smalltalk.send($receiver, "__eq", ["ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20nil%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifTrue:ifFalse:" : smalltalk.send($receiver, "__eq", ["ifTrue:ifFalse:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver =="ifFalse:ifTrue:" : smalltalk.send($receiver, "__eq", ["ifFalse:ifTrue:"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(smalltalk.send(smalltalk.send(aCollection, "_first", []), "_isBlockNode", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(aCollection, "_second", []), "_isBlockNode", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Boolean", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%21%20%24receiver%20%3F%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%20%3A%20")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_second", [])]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%28%29%29")]);return inlined=true;})]);})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C") : smalltalk.send($receiver, "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3C%3D") : smalltalk.send($receiver, "__eq", [unescape("%3C%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3C%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E") : smalltalk.send($receiver, "__eq", [unescape("%3E")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("%3E%3D") : smalltalk.send($receiver, "__eq", [unescape("%3E%3D")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20%3E%3D")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("+") : smalltalk.send($receiver, "__eq", [unescape("+")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20+")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("-") : smalltalk.send($receiver, "__eq", [unescape("-")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20-")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("*") : smalltalk.send($receiver, "__eq", [unescape("*")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20*")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
(($receiver = (($receiver = aSelector).klass === smalltalk.Number) ? $receiver ==unescape("/") : smalltalk.send($receiver, "__eq", [unescape("/")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self, "_checkClass_for_", ["Number", receiver]);smalltalk.send(self['@stream'], "_nextPutAll_", [unescape("%24receiver%20/")]);smalltalk.send(self, "_visit_", [smalltalk.send(aCollection, "_first", [])]);return inlined=true;})]);
return inlined;
return self;}
}),
smalltalk.Compiler);

smalltalk.addMethod(
'_performOptimizations',
smalltalk.method({
selector: 'performOptimizations',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_performOptimizations", []);
return self;}
}),
smalltalk.Compiler);


smalltalk.Compiler.klass.iVarNames = ['performOptimizations'];
smalltalk.addMethod(
'_recompile_',
smalltalk.method({
selector: 'recompile:',
fn: function (aClass){
var self=this;
smalltalk.send(smalltalk.send(aClass, "_methodDictionary", []), "_do_", [(function(each){var method=nil;
method=smalltalk.send(smalltalk.send(self, "_new", []), "_load_forClass_", [smalltalk.send(each, "_source", []), aClass]);smalltalk.send(method, "_category_", [smalltalk.send(each, "_category", [])]);return smalltalk.send(aClass, "_addCompiledMethod_", [method]);})]);
smalltalk.send(smalltalk.send(aClass, "_isMetaclass", []), "_ifFalse_", [(function(){return smalltalk.send(self, "_recompile_", [smalltalk.send(aClass, "_class", [])]);})]);
return self;}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
'_recompileAll',
smalltalk.method({
selector: 'recompileAll',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk, "_current", []), "_classes", []), "_do_", [(function(each){return smalltalk.send(self, "_recompile_", [each]);})]);
return self;}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
'_performOptimizations',
smalltalk.method({
selector: 'performOptimizations',
fn: function (){
var self=this;
return (($receiver = self['@performOptimizations']) == nil || $receiver == undefined) ? (function(){return true;})() : $receiver;
return self;}
}),
smalltalk.Compiler.klass);

smalltalk.addMethod(
'_performOptimizations_',
smalltalk.method({
selector: 'performOptimizations:',
fn: function (aBoolean){
var self=this;
self['@performOptimizations']=aBoolean;
return self;}
}),
smalltalk.Compiler.klass);


smalltalk.addClass('DoIt', smalltalk.Object, [], 'Compiler');
smalltalk.addMethod(
'_doIt',
smalltalk.method({
selector: 'doIt',
fn: function (){
var self=this;
return smalltalk.send((function(){return (($receiver = (typeof a == 'undefined' ? nil : a)).klass === smalltalk.Number) ? $receiver <(3) : smalltalk.send($receiver, "__lt", [(3)]);}), "_value", []);
return self;}
}),
smalltalk.DoIt);



