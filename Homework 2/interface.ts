export interface Container<T> {
	put( el:T):void; 
	get():T|undefined;
	remove(el:T):void;
}