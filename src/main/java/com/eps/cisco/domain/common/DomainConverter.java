package com.eps.cisco.domain.common;

public interface DomainConverter<A, B> {
	B convert(A a);
}